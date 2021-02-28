import { Message } from './../Models/Message';
import { Bot } from './../Models/Bot';
const express = require('express');
const router = express.Router();
import http from '../modules/axios'
const { body, validationResult } = require('express-validator');


router.post('/'
    , async (req:any, res: any) => {
        // const errors = validationResult(req);
        // if (!errors.isEmpty()) {
        //     return res.status(400).json({ errors: errors.array() });
        // }

        let LAST_MESSAGE = await Bot.findLastMessage(req.body.UNHASHED_CONVERSATION_ID)
        console.log(Bot.startConversation(LAST_MESSAGE, req.body));

        http.post('/messages', Bot.startConversation(LAST_MESSAGE, req.body))
            .then(response => {
                console.log(response);
                res.status(201);

            }).catch(err => {
                console.log(err);

            })





    })

export default router