/* eslint-disable */
process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');
const { NODE_ENV } = require('../config');

const expect = chai.expect;
chai.use(chaiHttp);

describe('Basic Express setup'.cyan.bold.underline, () => {
	describe('Environment'.cyan.bold, () => {
		it(`Node_ENV should be 'test'.`.cyan, () => {
			expect(NODE_ENV).to.equal('test');
		});
	});

	describe('404 handler'.cyan.bold, () => {
		it('should respond with 404 if given a bad path.'.cyan, () =>
			chai
				.request(app)
				.get('/bad/path')
				.then((response) => {
					expect(response).to.be.json;
					expect(response).to.have.status(404);
					expect(response).to.be.an('object');
					expect(response.body).to.have.keys(
						'status',
						'message');
					expect(response.body.status).to.equal(404);
					expect(response.body.message).to.equal('Not Found');
				}));
	});
});