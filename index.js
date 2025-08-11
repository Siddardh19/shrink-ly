const express=require('express');
const { connectToMongoDB}= require("./connect");
const URL = require("./models/url");

const urlRoute = require("./routes/url");

const app=express();
const PORT= 8001;

connectToMongoDB("mongodb://localhost:27017/short-url").then(() => console.log('Mongodb connected'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/url", urlRoute);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
