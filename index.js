import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
mongoose.connect(process.env.DB)

import express from 'express'
import cors from 'cors'
import { createtodo, deletetodo, fetchtodo, updatetodo } from './controller/todo.controller.js'
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// Root route
app.get('/', (req, res) => {
  res.send('Backend is working!');
})

// API routes
app.post("/todo", createtodo)
app.get("/todo", fetchtodo)
app.put("/todo/:id", updatetodo)
app.delete("/todo/:id", deletetodo)

app.listen(process.env.PORT || 8080, () => {
  console.log(`Server running on port ${process.env.PORT || 8080}`);
});
