import { Message } from './../Models/Message';
import { Bot } from './../Models/Bot';
const express = require('express');
const router = express.Router();

import * as faker from 'faker';
const { body, validationResult } = require('express-validator');
const REQUEST_MESSAGE_EXAMPLE = {
    "body": "test",
    "conversation_id": "abnd5ym5ykr7x4g3",
    "file": null,
    "reply_message": null
}

const LAST_MESSAGE_EXAMPLE = {
    created_at: "2021-02-20 11:26:42"
}

router.post('/'
    , async (req, res) => {
        // const errors = validationResult(req);
        // if (!errors.isEmpty()) {
        //     return res.status(400).json({ errors: errors.array() });
        // }

        let LAST_MESSAGE = await Bot.findLastMessage(req.body.CONVERSATION_ID)
        console.log(Bot.startConversation(LAST_MESSAGE, req.body));

        res.json(Bot.startConversation(LAST_MESSAGE, req.body))





    })

export default router