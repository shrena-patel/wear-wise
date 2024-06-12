import { Router } from 'express'

const router = Router()

const webhookTestUrl = "https://play.svix.com/in/e_QPvog4G8SDtb84esSo3GhWucV7f/"
router.post(webhookTestUrl, async (req, res) => {
  try {
    const { type, data } = req.body
    console.log(type, data, 'type and data')

    // switch (type) {
    //   case 'user.created':
    //     await db.handleUserCreated(data.user);
    //     break;
    //   case 'user.updated':
    //     await db.handleUserUpdated(data.user);
    //     break;
    //   case 'user.deleted':
    //     await db.handleUserDeleted(data.user);
    //     break;
    //   default:
    //     console.log('Unsupported event type:', type);
    // }




    res.json('it worked')
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Failed to get all users' })
  }
})

// router.post('/', async (req, res) => {
//   try {
//     const newUser = req.body
//     console.log(newUser, 'user in server routes')
//     await db.addUser(newUser)
//     res.json("User added")
//   } catch (error) {
//     console.log(error)
//     res.status(500).json({ message: 'Failed to add a user' })
//   }
// })

export default router