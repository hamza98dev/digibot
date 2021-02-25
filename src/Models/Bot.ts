import { MessageController } from './../Controllers/MessageController';
import { Message } from './Message';
export class Bot {


    static connect() {
        //Connect To API
    }

    static startConversation(LAST_MESSAGE,request) {


        return MessageController.initiatMessage(LAST_MESSAGE, request)

    }


    static disconnect() {
        //If No Respond Disconnect From Api
    }

    static findLastMessage(id: number) {
        return Message.findOne({ conversation_id: id }).exec();
    }

}