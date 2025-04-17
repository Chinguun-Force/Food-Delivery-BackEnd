import { Food } from "../schema/Food"
export const createFood = async (req, res) => {
    const food = await Food.create(req.body)
    console.log(req.body)
    res.json({ success: true, food })
}
export const getFood = async (req, res) => {
    const foods = await Food.find()
    res.json({ success: true, foods })
}
export const deleteFood = async (req, res) => {
    const food = await Food.findByIdAndDelete(req.params.id)
    res.json({ success: true, food })
}
export const updateFood = async (req, res) => {
    const food = await Food.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json({ success: true, food })
}