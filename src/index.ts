import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { foodRouter } from './routes/food';
import { connection } from './utils/connection';
import { categoryRouter } from './routes/category';
import { authRouter } from './routes/auth';

dotenv.config()

const port = 8000;

const app = express();

app.use(express.json())

app.use(cors());

app.use('/api/v1/foods', foodRouter);
app.use('/api/v1/categories', categoryRouter);
app.use('/api/v1/auth', authRouter)

app.get('/', (req, res) => {
  res.send('ok')
})

app.listen(port, async() => {
  const connectDb = async () => {
    try{
      await connection()
    }catch(err){
      console.error(err)
    }
  }
  connectDb()
  // const MONGODB_URI = process.env.MONGODB_URI as string;
  console.log(`Server is running on port ${port}`)
  // console.log(process.env.MONGODB_URI)
})
