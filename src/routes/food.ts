import express from 'express'
import { createFood, deleteFood, getFood, updateFood } from '../controller/food'
import { checkToken } from '../middleware/checktoken'
const foodRouter = express.Router()

foodRouter.post('/' ,checkToken, createFood)
foodRouter.get('/' , getFood)
foodRouter.delete('/:id' ,checkToken, deleteFood)
foodRouter.put('/:id' ,checkToken, updateFood)
foodRouter.patch('/:id' ,checkToken, updateFood)

export { foodRouter }