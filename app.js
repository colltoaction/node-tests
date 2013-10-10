var http = require('http');

q = [];

http.createServer(function (req, res) {
    if (req.url.indexOf("favicon") != -1)
        return;
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('q had ' + q.length + ' jobs');
    q.push("job " + q.length);
}).listen(1337, '127.0.0.1');

setInterval(function() {
    if (q.length > 0)
    {
	setTimeout(function(job) {
	    console.log(job);
	}, 2000, q.shift());
    }
}, 1000);

console.log('Server running at http://127.0.0.1:1337/');
