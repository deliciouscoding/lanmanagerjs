

var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(8080);

function handler (req, res) {
	fs.readFile(__dirname + '/index.html',
	function (err, data) {
	if (err) {
		res.writeHead(500);
		return res.end('Error loading index.html');
	}

	res.writeHead(200);
	res.end(data);
	});
}

io.on('connection', function (socket) {
	socket.emit('connected', { data: "Hello Friend!"})
	
	socket.on('chatmsg', function (data) {
		console.log("CHATMSG received:")
		console.log(data);
	});

	socket.on('login', function (data) {
		console.log("LOGIN received:")
		console.log(data);
		if (data.uname == "test") {
			socket.emit('login',{status: 'success'});
		}
	});
});
