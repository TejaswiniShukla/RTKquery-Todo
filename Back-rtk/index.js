const express = require("express");

const app = express();
const Cors = require('cors')

//routes import
const todoRoutes = require('./routes/todoRoutes')

//config
const dotenv = require("dotenv")
dotenv.config({path:"config/config.env"})

app.use(Cors());


// config express body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//connecting database
const connectDatabase = require("./config/database")
connectDatabase();

//routes use
// app.get("/",(req,res,next) => {
//     res.send("Welcome to App.")
// })

// app.use("/api",indexRoutes)
app.use("/api/todos",todoRoutes)


app.listen(process.env.PORT,() => {
    console.log(`Server is running on port ${process.env.PORT}`);
})


