import * as mongoose from 'mongoose';

const BotActions = new mongoose.Schema({
    fn: { type: String },
    params: {
        type: Map,
        of: String
    }
})

const BotMessages = new mongoose.Schema({
    id: Number,
    menuText: String,
    text: String,
    description: { type: String, default: null },
    parent_id: { type: Number, default: null },
    haveBack: { type: Boolean, default: false },
    haveBackHome: { type: Boolean, default: false },
    actions: [BotActions]
})



const BotSchema = new mongoose.Schema({

    bot_id: { type: Number, required: true },
    massages: [BotMessages]

})


export const botMessages = mongoose.model('botMessage', BotSchema);