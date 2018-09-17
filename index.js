const process = require('process');
const http = require('http');
const app = new http.Server();

require("appdynamics").profile({
 controllerHostName: 'localhost', // CHANGEME
 controllerPort: 8090, // CHANGEME
 accountName: 'customer1', // CHANGEME
 accountAccessKey: '4b4c0344-64ba-4777-a3ac-10b143910367', //CHANGEME
 applicationName: 'NodeJS_Test',
 tierName: 'nodejs',
 nodeName: 'process'
});


app.on('request', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello World');
  res.end('\n');
});

app.listen(8888, () => {
  console.log(`Listening on port 8888`);
  setInterval(() => {
	http.get('http://localhost:8888/', (resp) => {
		process.stdout.write(".")
	})
  }, 25);
});
