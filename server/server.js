import express from 'express';
import {readdirSync} from 'fs';
import cors from 'cors';
import mongoose from 'mongoose';
const morgan = require("morgan");
require("dotenv").config();

const app = express();

//middleware
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: false,
    // useCreateIndex: true,
})
.then(()=> console.log(`########## MongoDB Database connected ##########`))
.catch((e)=>console.log(`Error : ${e}`));

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// route middleware
readdirSync('./routes').map((e_route)=>{
    app.use('/api', require(`./routes/${e_route}`));
});


// port
const port = process.env.PORT || 8001;
app.listen(port, () => console.log(`Server is running on port ${port}`))
