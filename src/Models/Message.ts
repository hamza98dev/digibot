import * as mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({

    conversation_id: {
        type: Number,
        required: true
    },
    bot_id: {
        type: Number,
        required: true
    },

    participant_id: Number,

    participant_bot_id: Number,


    message: {
        type: String,
        default: null
    },
    last_message_id: Number,

    history: Object,

    last_message_date: {
        type: Date,
        default: Date.now()
    }

}, { timestamps: true })

export const Message = mongoose.model('Message', messageSchema);