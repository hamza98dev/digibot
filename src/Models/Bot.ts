import { MessageController } from './../Controllers/MessageController';
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

}