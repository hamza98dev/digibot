import * as express from "express";
const Pusher = require('pusher-js');
require('dotenv').config();
const app = express();


//Connect to MONGODB

import * as mongoose from 'mongoose';
import { Bot } from "./Models/Bot";

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true, useUnifiedTopology: true
})
    .then(() => {
        //Starting Server at Port ...
        app.listen(process.env.PORT || '4000', () => {
            console.log('App Startin in Port ' + process.env.PORT);

            let pusher = new Pusher(process.env.VUE_APP_PUSHER_KEY, {
                cluster: process.env.VUE_APP_PUSHER_CLUSTER,
                encrypted: process.env.VUE_APP_PUSHER_ENCRYPTED,

            });
            var channel = pusher.subscribe('chatbot');
            channel.bind('chatbot',
                function (data) {
                    Bot.startConversation(data)

                }
            );
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

//Use Message Route
import messageRouter from './Router/index';
app.use('/messages', messageRouter)
