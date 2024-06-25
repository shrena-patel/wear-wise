import express from 'express'
import * as Path from 'node:path'
import fruitRoutes from './routes/fruits.ts'
import userRoutes from './routes/users.ts'
import itemRoutes from './routes/items.ts'
import * as db from './db/users.ts'
import cors from 'cors'
import dotenv from 'dotenv'
import { Webhook } from 'svix'
import bodyParser from 'body-parser'

//https://dev.to/devlawrence/sync-clerk-users-to-your-database-using-webhooks-a-step-by-step-guide-263i 
dotenv.config()
const server = express()

server.use(cors())
server.use((req, res, next) => {
  if (req.originalUrl === '/api/webhook') {
    next()
  } else {
    express.json()(req, res, next)
  }
})


server.use('/api/v1/fruits', fruitRoutes)
server.use('/api/v1/users', userRoutes)
server.use('/api/v1/items', itemRoutes)

server.post(
  '/api/webhook',
  // middleware for parsing the request body as raw JSON data
  bodyParser.raw({ type: 'application/json' }),
  async function (req, res) {
    try {
      const payloadString = req.body.toString()
      console.log(payloadString, 'THE PAYLOAD STRING')
      const svixHeaders = req.headers
      console.log(process.env.WEBHOOK_SECRET)
      const wh = new Webhook(process.env.WEBHOOK_SECRET)
      console.log(wh, 'WH')
      // const evt = wh.verify(payloadString, svixHeaders)
      const evt = wh.verify(payloadString, {
        'svix-id': req.header('svix-id') || '',
        'svix-timestamp': req.header('svix-timestamp') || '',
        'svix-signature': req.header('svix-signature') || '',
      })
      console.log(evt, 'EVT')
      const { id, ...attributes } = evt.data
      // Handle the webhooks
      const eventType = evt.type

      //could turn this into a switch statement
      console.log(id, 'user id')

      if (eventType === 'user.created') {
        const emailObj = attributes.email_addresses?.find((email) => {
          return email.id === attributes.primary_email_address_id
        })

        // const phoneObj = attributes.phone_numbers?.find((phone) => {
        //     return phone.id === attributes.primary_phone_number_id
        // })
        
        const newUser = {
          name: attributes.username,
          clerk_id: id,
          email: emailObj.email_address,
          // phone: phoneObj.phone_number,
          profile_image: attributes.image_url
        }
        await db.addUser(newUser)
      }

      if (eventType === 'user.updated') {
        const emailObj = attributes.email_addresses?.find((email) => {
          return email.id === attributes.primary_email_address_id
        })
        console.log(emailObj, 'emailobject')
        // const phoneObj = attributes.phone_numbers?.find((phone) => {
        //     return phone.id === attributes.primary_phone_number_id
        // })
        
        const newUser = {
          name: attributes.username,
          clerk_id: id,
          email: emailObj.email_address,
          // phone: phoneObj.phone_number,
          profile_image: attributes.image_url
        }

        await db.updateUser(id, newUser)
      }

      if (eventType === 'user.deleted') {
        await db.deleteUser(id)
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

// server.use(cors())
// server.use(express.json())

// server.use('/api/v1/fruits', fruitRoutes)
// server.use('/api/v1/users', userRoutes)
// server.use('/api/v1/items', itemRoutes)


if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
