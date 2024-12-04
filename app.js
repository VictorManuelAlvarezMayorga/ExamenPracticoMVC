import mongoose from "mongoose";
import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import { test } from "./back/Controllers/carsController";

dotenv.config()

mongoose.conect(process.env.ur1)

.then(()=>(
    console.log('si jalo')
))
.catch(()=>(
    console.log('no jalo')
))

const app = express();
app.use(cors());
app.listen(4000,()=>
    console.log('se escucha bien')
)

test1()