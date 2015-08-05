/*
* This is a test script to test the XMPP Connection/Client
*/
console.log('Testing FB XMPP Connection');

var Client = require('facebook-live-chat/lib/client'),
    User = require('facebook-live-chat/lib/user'),
    Message = require('facebook-live-chat/lib/message');

//Dhamo's Access Token
var accessToken ='dXNlcjpBZAVIxampfQnQyTy1mbl9neXppVHRsc0dKUzRzUWZAEVElfN2ZA6bHJwZAkYwU2x6eVN5Vm5uV1dxRGlBUVFfYm81WllQUXJ5bkZAnNWJTNTdfT25saTNmX1RyM3lnb1J1RTYxUlBsWmhDekRhbTd1UQZDZD';

//Substituting the numeric ID for Dhamo
var sender_user_fb_id = '1316395293';
var chat_state_file = 'chat_state.dat';

var client = new Client(
{
//App ID of XMPP on Messenger App - the Test App
app_key: '1476833709293438',
access_token: accessToken,
chat_state_path: chat_state_file
});

var sender = new User(sender_user_fb_id);
var recipient = new User(sender_user_fb_id);
var message = new Message(sender, recipient, "Sample Message", null);

client.send(message);
