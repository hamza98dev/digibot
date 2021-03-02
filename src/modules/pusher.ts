const Pusher = require('pusher-js');
export let pusher = new Pusher(process.env.VUE_APP_PUSHER_KEY, {
    cluster: process.env.VUE_APP_PUSHER_CLUSTER,
    encrypted: process.env.VUE_APP_PUSHER_ENCRYPTED,

});
export let channel = pusher.subscribe('chatbot');
