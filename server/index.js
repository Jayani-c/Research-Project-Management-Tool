import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';


import userRoutes from './routes/user_r.js'
import researchRoutes from './routes/research_r.js'


const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());


app.use('/users', userRoutes);
app.use('/research', researchRoutes);

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb Connection Success!");
})


const URL = 'mongodb+srv://JayaniChamika:chamika123@researchprojectmanageme.n1iby.mongodb.net/Project_Management_Tool?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));


