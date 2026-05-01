const http = require('http');

const data = JSON.stringify({
  selectedDay: "2026-05-22",
  selectedTime: "09:00 AM",
  fullName: "Test Name",
  email: "test@example.com",
  topic: "General Compliance"
});

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/api/schedule-call',
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
