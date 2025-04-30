import express from "express";
import mongoose from "mongoose";

const mongo = new mongoose.Mongoose(
    {
        host: "localhost",
        port: 27017,
        dbName: "test",
        collection: "users",
    }
);

const app = express();

app.use(express.json());

app.get('/', async(req, res, next)=>{
    res.status(200).json({message : "API up and running"});
})

const user = new mongoose.Schema({
    userId : {
        type : String,
        unique : true,
    },
    assetId : {
        type : String,
        unique : true,
    },
    eventType : {
        type : String,
        unique : true,
    },
    platform : {
        type : String,
        unique : true,
    }
},
{
    timestamps : true,
});
const User = mongo.model("User", user);


app.post('/', async(req , res)=>{
    const {userId, assetId, eventType, platform} = req.body;
    try{
        const user = await User.create({
            userId,
            assetId,
            eventType,
            platform,
        });

        res.status(201).json({
            success : true,
            user
        });
    }catch(err){
        console.error(err);
        res.status(500).json({
            success : false,
            message : "Error Creating user",
        })
    }
});

app.listen(3000, async()=>{
    await mongo.syncIndexes();
    console.log(`Server is running on PORT 3000`);
})