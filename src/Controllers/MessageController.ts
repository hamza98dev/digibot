import { Messagetransformer } from './../Transformers/MessageTransformer';
import { isIntger, TimeDiff } from "../Helpers/helper"
import menu from "../MenuItem"
const backspace = '  '

export class MessageController {

    static initiatMessage(LAST_MESSAGE, { CURRENT_MESSAGE, CONVERSATION_ID, BOT_PARTICIPANT_ID }): {} {
        let message: any = '👋 Welcome to Itinarea Service How Can i Help?';

        //if he had no previous message or time between them is more than 1 days

        if (LAST_MESSAGE || TimeDiff(LAST_MESSAGE?.last_message_date) > 1) {
            message = menu.filter(el => el.type === "welcome")
        } else if (isIntger(CURRENT_MESSAGE.body)) {
            message = '👍 valid Choice'

        } else {
            message = '❌ Please Choice A valid Choice'
        }

        return Messagetransformer.transform(message, CONVERSATION_ID, BOT_PARTICIPANT_ID);

    }


    static GetQuestions(id: number) {
        if (id) {
            let Question = menu.find(item => item.id === id);
            let Choice = menu.filter(item => item.parent_id === id);
            return { Question, Choice }
        }
    }
}