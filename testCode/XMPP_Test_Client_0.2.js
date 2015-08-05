/*
* This is a test script to test the XMPP Connection/Client
*/
'use strict';

//Load the required libraries
var Client = require('facebook-live-chat/lib/client'),
    User = require('facebook-live-chat/lib/user'),
    Message = require('facebook-live-chat/lib/message');

//Page Access Token
var pageAccessToken = 'CAAUZCLCSif34BAHwHZBFQZBa5XdA9fVLOqT5wfTf50NkMBXiNr5b7Yvktg2bN3qd6P7dotXDi7ZBrJNyLbkrJso6p7sI03B4fISEGZAnuwoBwPNYtZBoYXOozipDfk59ZAXZAgGJjPw6n3u1piZAeGu3eoKejGHOs8vMdSbRJHEXwigeZBDcNafTSjafCEmngxhPWOaFm3GTFTGwZDZD'

var chat_state_file = 'chat_state.dat';

var client = new Client(
{
	//App ID of XMPP on Messenger App - the Test App
	app_key: '1476833709293438',
	access_token: pageAccessToken,
	chat_state_path: chat_state_file
});


/*
* On Connection event
*/
client.on('online', function (user) 
{
	console.log('Connected as ' + user.getDisplayName() + '!');
	  
	/*
	 * Need to update with CommerceUserToken, tokens that represent people who 
	 * message your app with Messenger for business
	 */
	var recipient = new User(/*CommerceUserToken*/);
	var message = new Message(client.me, recipient, "Sample Message", null);
	/*
	* Need to add the logic to send the message
	*/
	client.send(message);
});

/*
* On Message receive event
*/
client.on('message', function (message) 
{
  console.log('Received message: ' + message.text + ' from: ' + message.sender.id);
  //Add logic to send a response back to the sender here
});
