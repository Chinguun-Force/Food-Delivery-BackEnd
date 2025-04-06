import { foodCategory } from "../schema/FoodCategory";
 export const createCategory = async (request, response) =>{
    try{
        const created = await foodCategory.create(request.body)
        response.status(201).json({success: true, created})
    } catch(err){
        response.status(500).json({success: false, message: err.message})
    }
 };
 export const getCategories = async (request, response) => {
    try {
        const categories = await foodCategory.find({});
        response.status(200).json({ success: true, categories });
    } catch (err) {
        response.status(500).json({ success: false, message: err.message });}}
        export const deleteCategory = async (Request, Response) => {
            const category = await foodCategory.findByIdAndDelete(Request.params.id)
            Response.json({ success: true, category })
        }
        export const updateCategory = async (Request, Response) => {
            const category = await foodCategory.findByIdAndUpdate(Request.params.id, Request.body, { new: true })
            Response.json({ success: true, category })
        }
 export const getCategoriesWithFoods = async (request, response) => {
    try {
        const categories = await foodCategory.aggregate([
            {
                $lookup: {
                    from: "foods",
                    localField: "_id",
                    foreignField: "category",
                    as: "foods"
                }
            }
        ]);
        response.status(200).json({ success: true, categories });
    } catch (err) {
        response.status(500).json({ success: false, message: err.message });
    }
}