var assert = require('assert');

describe("exemplo-ut", function() {
	describe("request", function() {
		it('just true', function() {
			assert.equal(true, true);
		});
	});
});

var exemplo = require('../lib/example');
it('call service', function() {
	exemplo.callService(function(response) {
		assert.equal('Foo', response);
	});
	
});
