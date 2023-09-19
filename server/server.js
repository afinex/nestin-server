import express from 'express';
import {readdirSync} from 'fs';
require("dotenv").config();

const app = express();
readdirSync('./routes').map((e_route)=>{
    app.use('/api', require(`./routes/${e_route}`));
});

const port = process.env.PORT || 8001;

app.listen(port, () => console.log(`Server is running on port ${port}`))
