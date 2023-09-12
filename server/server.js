const express = require('express');

const app = express();

app.get('/api/:message', (req, res)=>{
    res.status(500).send(req.params.message);
})

app.listen(8001, () => console.log('Server is running on port 8001'))
