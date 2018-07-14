var http = require("https");

var options = {
    "protocol": "https:",
    "hostname": "api.github.com",
    "family": '4',
    "path": "/search/users?q=jaybojaybojaybo",
    "headers": {
        "header": "application/vnd.github.v3+json",
        "User-Agent": "48558681e3ae16349193437c664ef84416ab7c77"
    }
};

var req = http.get(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
        chunks.push(chunk);
    });

    res.on("end", function () {
        var body = Buffer.concat(chunks);
        var result = JSON.parse(body).items;
        console.log(result[0].login);
    });
});

req.end();