import express from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from'./routes/user.route.js'
import authRouter from'./routes/auth.route.js'
import cookieParser from 'cookie-parser';
import postRouter from'./routes/post.route.js'
import commentRouter from'./routes/comment.route.js'


dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
  console.log("mongo conectted!!!")
}).catch((err)=>{
  console.log(err);
})

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use('/api/user',userRouter)
app.use('/api/auth',authRouter)
app.use('/api/post',postRouter)
app.use('/api/comment',commentRouter)


app.listen(3000, () => {
  console.log("server is running on port 3000 !!");
});

app.use((err,req,res,next)=>{
  const statusCode = err.statusCode || 500;
  const message = err.message || 'internal server error'
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  })
})




