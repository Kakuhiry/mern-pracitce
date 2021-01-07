const express = require("express")
const bodyParser = require("body-parser");
const mongoose = require("mongoose")
const routes = require("./routes/routes")

const app = express()


//BodyParser middleware

app.use( 
    bodyParser.urlencoded({
        extended:false,
    })
);

app.use(bodyParser.json());

const db = require("./configs/keys").mongoURI;

mongoose
.connect(db, {useNewUrlParser: true,useUnifiedTopology: true})
.then(() => console.log("MongoDB successfully connected"))
.catch((err) => console.log(err))

const port = 5000 || 8000;
app.listen(port, ()=> console.log(`Server up and running on port ${port}!`))

app.use("/api/message", routes)