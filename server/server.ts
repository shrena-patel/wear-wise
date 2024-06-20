import express from 'express'
import * as Path from 'node:path'

import fruitRoutes from './routes/fruits.ts'
import userRoutes from './routes/users.ts'
import * as db from './db/users.ts'
// import webhookRoutes from './routes/webhooks.ts'
import cors from 'cors'
import dotenv from 'dotenv'
import { Webhook } from 'svix'
import bodyParser from 'body-parser'


dotenv.config()
const server = express()

server.post(
  '/api/webhook',
  // middleware for parsing the request body as raw JSON data
  bodyParser.raw({ type: 'application/json' }),

  async function (req, res) {
    console.log('testing webhook')
    try {
      
      const payloadString = req.body.toString()
      const svixHeaders = req.headers;
      console.log(payloadString, 'payload', svixHeaders, 'SVIX')
      const wh = new Webhook(process.env.WEBHOOK_SECRET)
      const evt = wh.verify(payloadString, svixHeaders)
      const { id, ...attributes } = evt.data
      // Handle the webhooks
      const eventType = evt.type

      //could turn this into a switch statement

      if (eventType === 'user.created') {
        console.log(`User ${id} was ${eventType}`)
        console.log(attributes, 'these are the attributes')
        // send details to the db by calling db.addUser
      }

      if (eventType === 'user.updated') {
        console.log(`User ${id} was ${eventType}`)
        console.log(attributes)
        const newUser = {
          name: attributes.username,
          clerk_id: id,
          email: attributes.email_addressess[0].email_address,
          phone: attributes.phone_numbers[0].phone_number,
          profile_image: attributes.image.url
        }
        await db.addUser(newUser)
        res.json(newUser + 'added')
      }

      if (eventType === 'user.deleted') {
        console.log(`User ${id} was ${eventType}`)
        console.log(attributes)
        // send details to the db by calling db.deleteUser
      }

      res.status(200).json({
        success: true,
        message: 'Webhook received',
      })
    } catch (err) {
      console.log(err)
      res.status(400).json({
        success: false,
        message: err.message,
      })
    }
  }
)


server.use(cors())
server.use(express.json())
// server.use(webhookMiddleware)

server.use('/api/v1/fruits', fruitRoutes)
server.use('/api/v1/users', userRoutes)
// server.use('/api/v1/webhooks', webhookRoutes)


if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

// WEBHOOKS
console.log(process.env.WEBHOOK_SECRET)
// server.post(
//   '/api/webhook',
//   bodyParser.raw({ type: 'application/json' }),
//   async function (req, res) {
//     try {
//       const payloadString = req.body.toString()
//       const svixHeaders = req.headers;

//       const wh = new Webhook(process.env.WEBHOOK_SECRET)
//       const evt = wh.verify(payloadString, svixHeaders)
//       const { id, ...attributes } = evt.data
//       // Handle the webhooks
//       const eventType = evt.type;
//       if (eventType === 'user.edited') {
//         console.log(`User ${id} was ${eventType}`)
//         console.log(attributes)
//       }
//       res.status(200).json({
//         success: true,
//         message: 'Webhook received',
//       })
//     } catch (err) {
//       res.status(400).json({
//         success: false,
//         message: err.message,
//       })
//     }
//   }
// )

export default server
