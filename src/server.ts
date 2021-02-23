import * as express from "express";

require('dotenv').config();
const app = express();

//Import Body Parser For Handling Request Data
const BodyParser = require('body-parser')
var cors = require('cors')

app.use(BodyParser.json());




//Enable CORS

app.use(cors());

//import Message Route

import messageRouter from './Router/index';
//Use Message Route

app.use('/messages', messageRouter)


//Starting Server at Port ...
app.listen(process.env.PORT || '4000', () => {
    console.log('App Startin in Port ' + process.env.PORT);

})