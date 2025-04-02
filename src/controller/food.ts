import { Food } from "../schema/Food"
export const createFood = async (Request, Response) => {
    const food = await Food.create(Request.body)
    console.log(Request.body)
    Request.json({ success: true, food })
}
export const getFood = async (Request, Response) => {
    const foods = await Food.find()
    Response.json({ success: true, foods })
}
export const deleteFood = async (Request, Response) => {
    const food = await Food.findByIdAndDelete(Request.params.id)
    Response.json({ success: true, food })
}
export const updateFood = async (Request, Response) => {
    const food = await Food.findByIdAndUpdate(Request.params.id, Request.body, { new: true })
    Response.json({ success: true, food })
}