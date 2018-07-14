var http = require("https");
var config = require('./config');

var options = {
    "protocol": "https:",
    "hostname": "api.github.com",
    "family": '4',
    "path": "/search/users?q=location:portland&per_page=10",
    "headers": {
        "header": "application/vnd.github.v3+json",
        "User-Agent": config
    }
};

var req = http.get(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
        chunks.push(chunk);
    });

    res.on("end", function () {
        var body = Buffer.concat(chunks);
        var results = JSON.parse(body).items;
        var output = [];
        results.forEach(result => {
            output.push(result);
            console.log(result.login);
        });
    });
});

req.end();