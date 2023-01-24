const Twit = require('twit');
 
const T = new Twit({
  consumer_key: '...',
  consumer_secret: '...',
  access_token: '...',
  access_token_secret: '...',
});

T.post('statuses/update', { status: 'Hello, world!' }, function(err, data, response) {
  console.log(data)
});