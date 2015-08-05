console.log('This is to test facebook-live-chat');

var fb = require('facebook-live-chat');

var Client = require('facebook-live-chat/lib/client'),
    User = require('facebook-live-chat/lib/user'),
    Message = require('facebook-live-chat/lib/message');

var recipient_user_fb_id = "516388527";
var sender_user_fb_id = "1476833709293438";
var client = new Client({
    app_key: "1476833709293438",
    access_token: "1476833709293438|9c73c629fddb456ec8c1506f0f61923f"
});
var sender = new User(sender_user_fb_id);
var recipient = new User(recipient_user_fb_id);
var message = new Message(sender, recipient, "Sample Message", null);
client.send(message);