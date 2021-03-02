import { Message } from './../Models/Message';
import { botMessages } from './../Models/BotMessage';
import { Messagetransformer } from './../Transformers/MessageTransformer';
import { isIntger, TimeDiff } from "../Helpers/helper"
import menu from "../MenuItem"
import { Bot } from '../Models/Bot';
const backspace = '  '

export class MessageController {

    static async initiatMessage({ CURRENT_MESSAGE, HASHED_CONVERSATION_ID, BOT_PARTICIPANT_ID, UNHASHED_CONVERSATION_ID, BOT }) {
        let LAST_MESSAGE: any = await Bot.findLastMessage(UNHASHED_CONVERSATION_ID)


        let message: any = '👋 Welcome to Itinarea Service How Can i Help?';
        //if he had no previous message or time between them is more than 1 days

        let question_id = null;

        if (LAST_MESSAGE && TimeDiff(LAST_MESSAGE?.last_message_date) < 24) {

            //get Last message Questions 

            let temp = await this.getBotMessages(LAST_MESSAGE.last_message_id)

            //Get User Input
            let user_msg = CURRENT_MESSAGE.body


            // check it 
            let data = this.checkSelectedIndex(temp, user_msg);
            if (typeof data === 'string') {
                message = data
            } else {
                message = await this.getBotMessages(data.id)
            }
        } else {
            message = await this.getBotMessages(question_id)

        }


        return Messagetransformer.transform(message, HASHED_CONVERSATION_ID, UNHASHED_CONVERSATION_ID, BOT_PARTICIPANT_ID, LAST_MESSAGE, BOT);

    }

    static async getBotMessages(last_message_id = null) {
        let condition = { ...(!last_message_id ? { "messages.parent_id": null } : { "messages.id": last_message_id }), bot_id: 1 }
        let parent: any = await botMessages.aggregate([
            { $unwind: "$messages" },
            { $match: condition },
            { $project: { _id: 0, messages: 1 } }
        ]);

        let children: any = await botMessages.aggregate([
            { $unwind: "$messages" },
            { $match: { "messages.parent_id": parent[0]?.messages.id, bot_id: 1 } },
            { $project: { _id: 0, messages: 1 } }

        ]);

        return { parent, children }
    }

    static async createOrUpdateLastMessage(last_message, _last_message) {
        console.log({ last_message, _last_message });
        if (!_last_message) {
            //Create a new Last Message
            new Message(last_message).save()
        } else {
            //Update LAst Message
            Message.updateOne({ conversation_id: _last_message.conversation_id },
                {
                    $set: {
                        last_message_id: last_message.last_message_id,
                        last_message_date: Date.now()
                    }
                }
            ).exec()
        }

    }

    static checkSelectedIndex(messages, index) {
        let choice: number;
        let message: string;
        let child = null;
        if (isIntger(index)) {
            choice = parseInt(index) - 1
            child = messages?.children[choice];
            if (child) {
                return child
            } else {
                message = '❌ Please Select A valid Choice'
                return message;
            }
        } else {
            message = '❌ Please Select A valid Choice'
            return message;

        }



    }
}