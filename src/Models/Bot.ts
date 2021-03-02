import { MessageService } from './../services/message.service';
import { MessageController } from './../Controllers/MessageController';
import { Message } from './Message';
export class Bot {


    static connect() {
        //Connect To API
    }

    static async startConversation(data) {

        let message = await MessageController.initiatMessage(data?.data)

        MessageService.save(message);
    }


    static disconnect() {
        //If No Respond Disconnect From Api
    }

    static findLastMessage(id: number) {
        return Message.findOne({ conversation_id: id }).exec();
    }

}