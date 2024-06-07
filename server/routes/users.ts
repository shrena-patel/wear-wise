import { Router } from 'express'

import * as db from '../db/users'

const router = Router()

router.post('/', async (req, res) => {
  try {
    const newUser = req.body
    await db.addUser(newUser)
    res.sendStatus(200)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Failed to add a user' })
  }
})

export default router