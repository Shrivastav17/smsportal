import express from 'express';
import bodyParser from 'body-parser';
import 'dotenv/config';
import cors from 'cors';
import libraryRoute from './Routes/LibraryRoute.js';
import ContactRoute from './Routes/ContactRoute.js';
import MessageRoute from './Routes/MessageRoute.js';
import GroupRoute from './Routes/GroupRoute.js';
import dbconnection from './Database/Mongodb.js';

dbconnection()
.then((res)=>{
    console.log("db connected");
    // console.log(res);
})
.catch(err=>{
    console.log("error",err);
});


const app= express();


app.use(bodyParser.json());
app.use(cors());
app.use("/library", libraryRoute);
app.use("/contact", ContactRoute);
app.use("/group", GroupRoute);
app.use("/message", MessageRoute)

 app.listen(process.env.PORT,()=>{
    console.log("app started");

 })


// app.listen(process.env.PORT, () => {
//     console.log(`server running on port no ${PORT}`)
// })

