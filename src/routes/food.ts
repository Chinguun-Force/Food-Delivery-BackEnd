import express from 'express'
import { createFood, deleteFood, getFood, updateFood } from '../controller/food'
const foodRouter = express.Router()

foodRouter.post('/' , createFood)
foodRouter.get('/' , getFood)
foodRouter.delete('/:id' , deleteFood)
foodRouter.put('/:id' , updateFood)
foodRouter.patch('/:id' , updateFood)

export { foodRouter }