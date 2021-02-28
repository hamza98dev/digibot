
export class Messagetransformer {


    static transform(message, conversation_id, participant_id): {} {

        return {
            body: message,
            conversation_id,
            participant_id,
        }

    }


}