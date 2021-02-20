import { MessageTransformer } from './../Transformers/MessageTransformer';
import { isIntger, TimeDiff } from "../Helpers/helper"
import menu from "../MenuItem"
const backspace = '  '

export class MessageController {

    static initiatMessage(LAST_MESSAGE): {} {

        if (TimeDiff(LAST_MESSAGE.created_at) > 1) {
            let message = menu.filter(el => el.type === "welcome")
            return { message }
        } else {
            //last question id where they Stoped
            let lAST_QUESTION_ID_EXEMPLE = 2
            return { messages: this.GetQuestions(lAST_QUESTION_ID_EXEMPLE) }

        }

    }


    static GetQuestions(id: number) {

        if (id) {
            let Question = menu.filter(item => item.id === id);
            let Choice = menu.filter(item => item.parent_id === id);
            return MessageTransformer.fromat({ Question, Choice })
        }





    }
}