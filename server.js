process.env.UV_THREADPOOL_SIZE = 5;

const express = require('express');
const mongoose = require('mongoose')
var cors = require('cors')
const app = express();
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
mongoose.connect(mongouri, {
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