const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.port || 5000 ;

const items = require('./routes/api/items');

app.use(express.json());

const uri = process.env.LOCAL_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true ,useUnifiedTopology:true}
    ).then(() => console.log("connected to database!!"))
    .catch((err) => console.log(err));
     
app.use('/api/items',items);

app.listen(port, ()=>{
    console.log('Server is running on port: ' + port);
})
