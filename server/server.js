import express from 'express';
import {readdirSync} from 'fs';

const app = express();
readdirSync('./routes').map((e_route)=>{
    app.use('/api', require(`./routes/${e_route}`));
});

app.listen(8001, () => console.log('Server is running on port 8001'))
