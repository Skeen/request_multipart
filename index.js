var request = require('request');

var server_url = "skeen.website:3001";
var filename = "c.csv";
var filecontents = "CONTENTS";
var callback = function(status_code)
{
    console.log(status_code);
}

request(
{
    method: 'POST',
    uri: "http://" + server_url + "/upload",
    headers: {
        'Content-Type': 'multipart/form-data',
    },
    multipart: {
        chunked: false,
        data: [
            {
                'Content-Disposition': 'form-data; name="filename"',
                body : filename
            },
            {
                'Content-Disposition': 'form-data; name="file"; filename="blob"',
                'Content-Type': 'application/octet-stream',
                body : filecontents
            }
        ]
    },
},
function (error, response, body) 
{
    callback(response.statusCode);
    if (error) {
        console.log("error:" + error);
    }
    console.log("success:" + body);
}
);
