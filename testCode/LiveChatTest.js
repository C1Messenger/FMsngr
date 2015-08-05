console.log('This is to test facebook-live-chat');

var fb = require('facebook-live-chat');

var Client = require('facebook-live-chat/lib/client'),
    User = require('facebook-live-chat/lib/user'),
    Message = require('facebook-live-chat/lib/message');

var accessToken_Dhamo='dXNlcjpBZAVIxampfQnQyTy1mbl9neXppVHRsc0dKUzRzUWZAEVElfN2ZA6bHJwZAkYwU2x6eVN5Vm5uV1dxRGlBUVFfYm81WllQUXJ5bkZAnNWJTNTdfT25saTNmX1RyM3lnb1J1RTYxUlBsWmhDekRhbTd1UQZDZD';
var chat_state_file = 'chat_state.dat';


var client = new Client(
  {
     app_key: 1476833709293438,
     access_token: accessToken_Dhamo,
     chat_state_path: chat_state_file
  }
);

client.send(
  new Message(
	  {sender: client.me, 
		recipient: 'srdulam', text: 'Hello World from the Node program named LiveChatTest'},
  function (err, res) {
    if (err) {
      console.error("An unknown error has occurred: " + err);
    }

    else if (res) {
      console.log("Sent message ID: " + res.ID);
    }
  }
)
);
