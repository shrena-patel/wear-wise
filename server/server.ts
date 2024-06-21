import express from 'express'
import * as Path from 'node:path'
import fruitRoutes from './routes/fruits.ts'
import userRoutes from './routes/users.ts'
import * as db from './db/users.ts'
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
    try {
      const payloadString = req.body.toString()
      const svixHeaders = req.headers;
      const wh = new Webhook(process.env.WEBHOOK_SECRET)
      const evt = wh.verify(payloadString, svixHeaders)
      const { id, ...attributes } = evt.data
      // Handle the webhooks
      const eventType = evt.type

      //could turn this into a switch statement

      if (eventType === 'user.created') {
        const emailObj = attributes.email_addresses?.find((email) => {
          return email.id === attributes.primary_email_address_id
        })
        console.log(emailObj, 'emailobject')
        const phoneObj = attributes.phone_numbers?.find((phone) => {
            return phone.id === attributes.primary_phone_number_id
        })
        
        const newUser = {
          name: attributes.username,
          clerk_id: id,
          email: emailObj.email_address,
          phone: phoneObj.phone_number,
          profile_image: attributes.image_url
        }
        await db.addUser(newUser)
      }

      if (eventType === 'user.updated') {
        console.log(`User ${id} was ${eventType}`)
        console.log(attributes)
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

server.use(cors())
server.use(express.json())

server.use('/api/v1/fruits', fruitRoutes)
server.use('/api/v1/users', userRoutes)


if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
