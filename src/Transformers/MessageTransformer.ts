export class MessageTransformer {

    static fromat(entity: any) {
        let message: string = "";
        message = entity.Question.message;
        entity.Choice.forEach((item, i) => {

            message.concat((i + 1) + item.message)

        })
        return message
    }
}