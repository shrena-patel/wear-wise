import { Router } from 'express'

import * as db from '../db/users'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const allUsers = await db.getAllUsers()
    res.json(allUsers)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Failed to get all users' })
  }
})

router.post('/', async (req, res) => {
  try {
    const newUser = req.body
    console.log(newUser, 'user in server routes')
    await db.addUser(newUser)
    res.json("User added")
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Failed to add a user' })
  }
})

export default router