import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import { Food } from './schema/Food';
const port = 3001;
const app = express();

app.post('/food' ,async(req:Request, res:Response) =>{
  const food = await Food.create(req.body)
  // const food = Food.create({
  //   foodName: "Pizza",
  //   price: 1000,
  //   image: "https://www.google.com",
  //   ingredients: "Cheese, Tomato, Flour",
  //   category: "5f5e0f9d0b0b1d2c5c5c5c5c"
  // })
  res.json({success: true, food})
  // Food.create(req.body)
  // res.json({success: true})
})
app.get ('/food', async(req:Request, res:Response) => {
  const foods = await Food.find()

  res.json({success: true, foods})
})
app.listen(port, async() => {
  const connectDb = async () => {
    try{
      await mongoose.connect("mongodb+srv://chinguunbats9:Chinguung*oo7@cluster0.f1s8hns.mongodb.net/")
      console.log("Connected to database")
    }catch(err){
      console.error(err)
    }
  }
  connectDb()
  console.log(`Server is running on port ${port}`)
})