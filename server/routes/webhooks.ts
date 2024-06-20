// import { Router } from 'express'

// const router = Router()

// const webhookTestUrl = "https://play.svix.com/in/e_QPvog4G8SDtb84esSo3GhWucV7f/"
// router.post(webhookTestUrl, async (req, res) => {
//   try {
//     const { type, data } = req.body
//     console.log(type, data, 'type and data')

//     // switch (type) {
//     //   case 'user.created':
//     //     await db.handleUserCreated(data.user);
//     //     break;
//     //   case 'user.updated':
//     //     await db.handleUserUpdated(data.user);
//     //     break;
//     //   case 'user.deleted':
//     //     await db.handleUserDeleted(data.user);
//     //     break;
//     //   default:
//     //     console.log('Unsupported event type:', type);
//     // }




//     res.json('it worked')
//   } catch (error) {
//     console.log(error)
//     res.status(500).json({ message: 'Failed to get all users' })
//   }
// })

// // router.post('/', async (req, res) => {
// //   try {
// //     const newUser = req.body
// //     console.log(newUser, 'user in server routes')
// //     await db.addUser(newUser)
// //     res.json("User added")
// //   } catch (error) {
// //     console.log(error)
// //     res.status(500).json({ message: 'Failed to add a user' })
// //   }
// // })

// export default router

import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { Webhook } from 'svix'
import bodyParser from 'body-parser'

dotenv.config()

const app = express()

// app.use(cors())

// Real code

app.post(
  '/api/webhook',
  bodyParser.raw({ type: 'application/json' }),
  async function (req, res) {
    try {
      const payloadString = req.body.toString()
      const svixHeaders = req.headers;

      const wh = new Webhook(process.env.WEBHOOK_SECRET)
      const evt = wh.verify(payloadString, svixHeaders)
      const { id, ...attributes } = evt.data
      // Handle the webhooks
      const eventType = evt.type;
      if (eventType === 'user.created') {
        console.log(`User ${id} was ${eventType}`)
        console.log(attributes)
      }
      res.status(200).json({
        success: true,
        message: 'Webhook received',
      })
    } catch (err) {
      res.status(400).json({
        success: false,
        message: err.message,
      })
    }
  }
)

// const port = process.env.PORT || 5000

// app.listen(port, () => {
//   console.log(`Listening on port http://localhost:${port}`);
// });