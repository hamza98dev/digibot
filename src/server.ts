import * as express from "express";

require('dotenv').config();
const app = express();

//Connect to MONGODB

import * as mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true, useUnifiedTopology: true
})
    .then(() => {
        //Starting Server at Port ...
        app.listen(process.env.PORT || '4000', () => {
            console.log('App Startin in Port ' + process.env.PORT);

        })
    }
    )
    .catch(err => console.log(err)
    )


//Import Body Parser For Handling Request Data
const BodyParser = require('body-parser')
var cors = require('cors')

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));




//Enable CORS

app.use(cors());

//import Message Route

import messageRouter from './Router/index';
//Use Message Route

app.use('/messages', messageRouter)


