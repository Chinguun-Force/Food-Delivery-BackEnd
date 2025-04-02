import express, { Request, Response } from 'express';
import { foodCategory } from './schema/FoodCategory';
import { User } from './schema/User';
import { foodRouter } from './routes/food';
import { connection } from './utils/connection';
const port = 8000;
const app = express();
app.use(express.json())

app.post ('/foodCategory', async(req , res ) =>{
  const FoodCategory = await foodCategory.create(req.body)
  res.json({success: true, FoodCategory})
})
app.post('/user' , async(req:Request, res:Response) =>{
  const userMock = await User.create(req.body)
  res.json({success: true, userMock})
}
)
app.use('/api/v1/food', foodRouter);


app.listen(port, async() => {
  const connectDb = async () => {
    try{
      await connection()
    }catch(err){
      console.error(err)
    }
  }
  connectDb()
  console.log(`Server is running on port ${port}`)
})