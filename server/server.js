import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
import e from 'express';
import connectDB from './config/mongodb.js';
import userRoute from './routes/user.route.js'


const app = express();
const PORT = process.env.PORT || 6050;

// Connect to MongoDB
await connectDB();

// Allow multiple origins
const allowedOrigins = ['http://localhost:5173'];

// middlewares setup
app.use(express.json());
app.use(cookieParser()); // cookie parser middleware to handle http cookies
app.use(cors({
    origin:allowedOrigins,
    credentials:true,
}));

// Define api routes
app.use('/api/v1/user',userRoute);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
