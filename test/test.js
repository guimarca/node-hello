var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = require('chai').expect;

chai.use(chaiHttp);
const url = 'http://localhost:3000';

var server = require('../index');

describe('Request /', function() {
  before(function () {
    server.listen(3000);
  });

  after(function () {
    server.close();
  });

  it('should return status 200', function() {
    chai.request(url)
			.get('/')
			.end( function(err, res) {
        expect(res).to.have.status(200);
			});
  });
});