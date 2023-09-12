import express from 'express';
import router from './routes/auth';


const app = express();

app.use('/api', router);
app.listen(8001, () => console.log('Server is running on port 8001'))
