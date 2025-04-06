import express from 'express';
import { createCategory, deleteCategory, getCategories, updateCategory } from '../controller/category';
import { getCategoriesWithFoods } from '../controller/category';


const categoryRouter = express.Router();

categoryRouter
    .post('/', createCategory)
    .get('/with-foods', getCategoriesWithFoods)
    .get('/', getCategories)
    .delete('/:id', deleteCategory)
    .put('/:id', updateCategory)

export { categoryRouter };