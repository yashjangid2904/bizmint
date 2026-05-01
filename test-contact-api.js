const http = require('http');

const data = JSON.stringify({
  fullName: "test@12",
  email: "tishasaini2004@gmail.com",
  phone: "+919664407039",
  service: "ROC Filings",
  message: "yess"
});

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/api/contact',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = http.request(options, res => {
  let body = '';
  res.on('data', chunk => body += chunk);
  res.on('end', () => console.log(`STATUS: ${res.statusCode} BODY: ${body}`));
});

req.on('error', error => console.error(error));
req.write(data);
req.end();
