import { Router } from 'express'

import * as db from '../db/items'

const router = Router()

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const allItemsById = await db.getAllItemsById(id)
    res.json(allItemsById)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: `Failed to get all items from user id ${req.params.id}` })
  }
})


export default router