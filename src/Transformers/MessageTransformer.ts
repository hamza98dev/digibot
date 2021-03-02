
export class Messagetransformer {


    static transform(message, conversation_id, _conversation_id, participant_id, last_message_status, bot): {} {
        let msg: string
        let temp = [];
        let LAST_MESSAGE_ID: number


        if (typeof message !== 'string') {

            message?.parent?.forEach(element => {
                temp.push(element.messages.text)
                LAST_MESSAGE_ID = element.messages.id
            });
            message?.children?.forEach((element, index) => {
                temp.push(this.getEmojiNumber(index + 1) + '  ' + element.messages.menuText)

            });
            temp.length !== 0 ? msg = temp.join('\n') : msg = '🤖 Could not find a response'
        } else {
            msg = message;
        }
        return {
            message: {
                body: msg,
                conversation_id,
                participant_id,
            },
            last_message: {
                conversation_id: _conversation_id,
                bot_id: bot.id,
                participant_bot_id: participant_id,
                last_message_id: LAST_MESSAGE_ID
            },
            last_message_status

        }


    }

    static getEmojiNumber(n) {

        var digits = ("" + n).split("");

        let nums: any;
        nums = digits.map(i => {
            switch (parseInt(i)) {
                case 1:
                    return '1️⃣'
                    break;
                case 2:
                    return '2️⃣'
                    break;
                case 3:
                    return '3️⃣'
                    break;
                case 4:
                    return '4️⃣'
                    break;
                case 5:
                    return '5️⃣'
                    break;
                case 6:
                    return '6️⃣'
                    break;
                case 7:
                    return '7️⃣'
                    break;
                case 8:
                    return '8️⃣'
                    break;
                case 9:
                    return '9️⃣'
                    break;
                case 0:
                    return '0️⃣'
                    break;

                default:
                    break;
            }
        })
        return nums.join('')
    }


}