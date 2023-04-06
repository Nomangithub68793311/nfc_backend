// process.env.UV_THREADPOOL_SIZE = 5;

const express = require('express');
const mongoose = require('mongoose')
var cors = require('cors')
const app = express();
const dotenv = require('dotenv')
dotenv.config()
const router = require('./routes/authroute');

const { mongouri } = require('./config/keys')
app.use(cors())
app.use(express.json());



// app.get('/.well-known/assetlinks.json', function(req, res) {
//     res.sendFile(__dirname + '/.well-known/assetlinks.json');
//   });

app.get('/', (req, res) => {
    res.send('got it')
})
mongoose.connect('mongodb://ranaDatabase:ahmedimran96yoo@ac-nql5qlw-shard-00-00.xer9vl6.mongodb.net:27017,ac-nql5qlw-shard-00-01.xer9vl6.mongodb.net:27017,ac-nql5qlw-shard-00-02.xer9vl6.mongodb.net:27017/hellodatabase?ssl=true&replicaSet=atlas-o00q1f-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
}).then((result) => {
    console.log('mongo connected');
})
    .catch((err) => { console.log(err) });



const port = process.env.PORT || 5000;
app.listen(port, () => { console.log(`server run at ${port}`) })
app.use(router)
// if(process.env.NODE_ENV=='production'){
//   app.use(express.static('client/build'))
//   const path=require('path')
//   app.get('*',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'client','build','index.html'))
//   })
// }