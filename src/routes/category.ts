import express from 'express';
import { createCategory, deleteCategory, getCategories, updateCategory } from '../controller/category';
import { getCategoriesWithFoods } from '../controller/category';
import { checkToken } from '../middleware/checktoken';


const categoryRouter = express.Router();

categoryRouter
    .post('/',checkToken, createCategory)
    .get('/with-foods', getCategoriesWithFoods)
    .get('/', getCategories)
    .delete('/:id',checkToken, deleteCategory)
    .put('/:id',checkToken, updateCategory)

export { categoryRouter };