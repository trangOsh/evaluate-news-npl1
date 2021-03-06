const dotenv =require('dotenv')
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const webpack = require('webpack');
const bodyParser = require('body-parser')
const app = express()

//const fetch = require("node-fetch");

// body parser as middle ware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// cors for cross origin allowance
const cors = require('cors');
app.use(cors());
//location of app
app.use(express.static('dist'))


console.log(__dirname)



const api= process.env.API_KEY

const baseUrl = 'https://api.meaningcloud.com/sentiment-2.1?key=';
//console.log(`Your API key is ${process.env.API_KEY}`);
console.log("there is api", api)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8082, function () {
    console.log('Example app listening on port 8082!')
})

cloudData = {};
// this route to check
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// app.get("/all", function(req, res) {
//     res.send(cloudData)
// })

app.get('/apikey',function(req,res) {
    res.send(api)
})
/*
APIKey = await getAPI('http://localhost:8081/apikey')
    const finalURL = baseURL + APIKey.key + "&of=json&url=" + text +"&lang=en"
*/
const baseURL= "https://api.meaningcloud.com/sentiment-2.1?key="

app.post('/apiData', function(req,res){
    cloudData = req.body;
    res.send(apiData)
})
// app.post("/apiData", postData) 



