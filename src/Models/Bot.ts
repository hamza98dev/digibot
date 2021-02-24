import { MessageController } from './../Controllers/MessageController';
import { Message } from './Message';
export class Bot {


    static connect() {
        //Connect To API
    }

    static startConversation(LAST_MESSAGE) {


        return MessageController.initiatMessage(LAST_MESSAGE)

    }


    static disconnect() {
        //If No Respond Disconnect From Api
    }

    static findLastMessage(id: number) {
        return Message.findOne({ conversation_id: id }).exec();
    }

}