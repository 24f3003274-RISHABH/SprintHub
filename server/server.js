import express from 'express';
import 'dotenv/config';
import cors from 'cors';

const app =express();

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>res.send("Server is running..."));

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));
// #server will run on port 5000 or the port specified in the environment variables.
