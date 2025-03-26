"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const port = 3001;
const app = (0, express_1.default)();
app.get('/', (_req, res) => {
    res.json([
        {
            "_id": 6,
            "foodName": "Margherita Pizza",
            "price": 12.99,
            "image": "margherita-pizza.jpg",
            "ingredients": "Tomato sauce, mozzarella, basil",
            "category": 1,
            "createdAt": "2025-07-01",
            "updatedAt": "2025-07-01"
        },
        {
            "_id": 2,
            "foodName": "Cheeseburger",
            "price": 8.49,
            "image": "cheeseburger.jpg",
            "ingredients": "Beef patty, cheddar cheese, lettuce, tomato, pickles, bun",
            "category": 2,
            "createdAt": "2025-07-01",
            "updatedAt": "2025-07-01"
        },
        {
            "_id": 3,
            "foodName": "Caesar Salad",
            "price": 7.99,
            "image": "caesar-salad.jpg",
            "ingredients": "Romaine lettuce, Caesar dressing, croutons, parmesan cheese",
            "category": 3,
            "createdAt": "2025-07-01",
            "updatedAt": "2025-07-01"
        },
        {
            "_id": 4,
            "foodName": "Spaghetti Bolognese",
            "price": 14.50,
            "image": "spaghetti-bolognese.jpg",
            "ingredients": "Spaghetti, ground beef, tomato sauce, garlic, onion, herbs",
            "category": 4,
            "createdAt": "2025-07-01",
            "updatedAt": "2025-07-01"
        },
        {
            "_id": 5,
            "foodName": "Veggie Wrap",
            "price": 6.49,
            "image": "veggie-wrap.jpg",
            "ingredients": "Hummus, lettuce, cucumber, tomato, spinach, tortilla",
            "category": 5,
            "createdAt": "2025-07-01",
            "updatedAt": "2025-07-01"
        },
        {
            "_id": 6,
            "foodName": "Chicken Wings",
            "price": 10.99,
            "image": "chicken-wings.jpg",
            "ingredients": "Chicken wings, hot sauce, blue cheese dressing",
            "category": 6,
            "createdAt": "2025-07-01",
            "updatedAt": "2025-07-01"
        },
        {
            "_id": 7,
            "foodName": "Vegetable Soup",
            "price": 5.99,
            "image": "vegetable-soup.jpg",
            "ingredients": "Carrots, celery, potatoes, onions, vegetable broth",
            "category": 7,
            "createdAt": "2025-07-01",
            "updatedAt": "2025-07-01"
        },
        {
            "_id": 8,
            "foodName": "Tacos",
            "price": 9.50,
            "image": "tacos.jpg",
            "ingredients": "Ground beef, lettuce, cheese, salsa, soft tortilla",
            "category": 8,
            "createdAt": "2025-07-01",
            "updatedAt": "2025-07-01"
        },
        {
            "_id": 9,
            "foodName": "Fish and Chips",
            "price": 13.99,
            "image": "fish-and-chips.jpg",
            "ingredients": "Cod, batter, fries, tartar sauce",
            "category": 9,
            "createdAt": "2025-07-01",
            "updatedAt": "2025-07-01"
        },
        {
            "_id": 10,
            "foodName": "Pancakes",
            "price": 6.99,
            "image": "pancakes.jpg",
            "ingredients": "Flour, eggs, milk, butter, syrup",
            "category": 10,
            "createdAt": "2025-07-01",
            "updatedAt": "2025-07-01"
        }
    ]);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=index.js.map