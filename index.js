import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URI = "https://secrets-api.appbrewery.com/";

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'))

app.get("/", async (req, res)=>{
    try{
        let response = await axios.get(API_URI + "random");
        let result = response.data;
        res.render("index.ejs", {secret: result.secret, user: result.username});
    }catch(err){
        res.status(404).send(err.message);
    }
})

app.listen(port, ()=>{
    console.log("Server has started");
})

