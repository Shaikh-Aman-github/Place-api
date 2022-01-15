const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/product-routes");
const cors = require("cors");
const app = express();

let port = process.env.PORT || 8080;

app.use(express.json()); 

//route - /
app.use("/products", router);

mongoose.connect(
    "mongodb+srv://admin:vYKs25Ap9webM9cL@cluster0.b9kg8.mongodb.net/ApiData?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => {
    console.log("connected");
}).catch(err => {
    console.log(err);
});

app.listen(port, () => { 
    console.log("running in 8080");
});