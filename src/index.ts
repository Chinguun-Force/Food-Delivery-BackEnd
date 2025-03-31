import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import { Food } from './schema/Food';
import { foodCategory } from './schema/FoodCategory';
import { User } from './schema/User';
const port = 3001;
const app = express();
app.use(express.json())
app.post('/food' ,async(req:Request, res:Response) =>{
  const food = await Food.create(req.body)
  console.log(req.body)
  res.json({success: true, food})
})
app.get ('/food', async(req:Request, res:Response) => {
  const foods = await Food.find()

  res.json({success: true, foods})
})
app.post ('/foodCategory', async(req , res ) =>{
  const FoodCategory = await foodCategory.create(req.body)
  res.json({success: true, FoodCategory})
})
app.post('/user' , async(req:Request, res:Response) =>{
  const userMock = await User.create(req.body)
  res.json({success: true, userMock})
}
)
app.delete('/food/:id', async(req:Request, res:Response) =>{
  const food = await Food.findByIdAndDelete(req.params.id)
  res.json({success: true, food})
}
)
app.put('/food/:id', async(req:Request, res:Response) =>{
  const food = await Food.findByIdAndUpdate(req.params.id, req.body, {new: true})
  res.json({success: true, food})
}
)
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