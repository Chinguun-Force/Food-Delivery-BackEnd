import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { foodRouter } from './routes/food';
import { connection } from './utils/connection';
import { categoryRouter } from './routes/category';
dotenv.config()
const port = 8000;
const app = express();
app.use(express.json())

app.use('/api/v1/food', foodRouter);
app.use('/api/v1/categories', categoryRouter);

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
  console.log(`Server is running on port ${port}`)
})
