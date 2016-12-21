console.log("Running");
var request = require('request');

request.post({
    url: 'https://api.clever-cloud.com/v2/oauth/request_token',
    auth: {
        user: 'aC9EE1maymfGLrPAJJlochFMs6HIwZ',
        pass: 'LHYfV2hDGd3qqktbVY99n6AwLLLTor'
    },
    form: { grant_type:'client_credentials'},
    json: true
}, function (err, resp, body) {
    console.log(body);
});