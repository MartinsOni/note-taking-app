function listData (params) {

    const http = require('http');
    const fs = require('fs');

    let infoData = JSON.parse(fs.readFileSync('data.json'));

    http.createServer(function (req, res) {
        res.writeHead(200, {
            'Content-Type': 'text/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
            'Access-Control-Max-Age': 2592000, // 30 days
        });
        res.write(JSON.stringify(infoData));
        res.end();
    }).listen(8083);

}

export default listData