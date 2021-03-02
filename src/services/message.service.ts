import { MessageController } from './../Controllers/MessageController';
import http from '../modules/axios'

export class MessageService {

    static save(data) {
        http.post('/messages', data.message)
            .then(response => {
                // Create Or Update Last Message
                MessageController.createOrUpdateLastMessage(data.last_message, data.last_message_status)
                    .then(res => {
                        console.log(res);

                    }).catch(err => {
                        console.log(err);

                    });

            }).catch(err => {
                // console.log(err);

            })
    }

}