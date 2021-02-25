import { Message } from './../src/Models/Message';
import * as faker from 'faker';
import * as assert from "assert";

describe('Mongo Interactions', () => {

    it('save to DB', async () => {

        let msg = new Message({
            conversation_id: faker.random.number(),
            bot_id: faker.random.number(),
            participant_id: faker.random.number(),
            participant_bot_id: faker.random.number(),
            message: faker.lorem.word()
        })
        msg.save()
            .then((doc) => {
                assert(msg.isNew === false);
            })



    })
})