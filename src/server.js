const replies = require('./replies');
const http = require('http')

const server = http.createServer((req, res) => {
	switch(req.url){
		case "/":
			res.writeHead(200, {'Content-Type': 'text/html'})
			res.end(`
				<!doctype>
					<head>
						<title>Node</title>
					</head>
					<body>
						<h1>Node.js</h1>
					</body>
			`)
		default:
			res.writeHead(404, {'Content-Type': 'text/plain'})
			res.end('404 not found')
	}
})



module.exports = server;