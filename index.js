const http = require('http');
const port = process.env.PORT || 3000;

this.server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('Hello World\n');
});

exports.listen = function () {
  this.server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
};

exports.close = function (callback) {
  this.server.close(callback);
};
