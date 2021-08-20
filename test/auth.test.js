/* eslint-disable */
process.env.NODE_ENV = 'test';

const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
const jwt = require('jsonwebtoken');

const server = require('../server');
const knex = require('../db/knex');
const { JWT_SECRET, JWT_EXPIRATION } = require('../config');
const { userController } = require('../controllers');

chai.use(chaiHttp);

describe('Auth API resources'.cyan.bold.underline, () => {
	let user = {
		user_id: 1,
		username: 'demo',
		email: 'demo@demo.com',
		iat: Date.now()
	};

	let authToken;

	beforeEach(() => knex.migrate.rollback()
		.then(() => knex.migrate.latest())
		.then(() => knex.seed.run())
		.then(async () => {
			validUser = await userController.findOne('demo');
		})
		.then(() => {
			authToken = jwt.sign(user, JWT_SECRET, { expiresIn: JWT_EXPIRATION, algorithm: 'HS256' });
		})
	);

	afterEach(() => knex.migrate.rollback());
	describe('api/user/login'.cyan.bold, () => {
		describe('POST'.yellow, () => {
			it('should return a 401 if you attempt to login with a username not in the database.'.cyan, async () => {
				const userNotInDatabase = 'fiasnfsnafiasofnisn';
				const inValidUser = { username: userNotInDatabase, password: 'password' };
				const response = await chai
					.request(server)
					.post('/api/user/login/')
					.send(inValidUser);
				expect(response).to.be.json;
				expect(response).to.be.an('object');
				expect(response).to.have.status(401);
				expect(response.body.name).to.equal('AuthenticationError');
				expect(response.body.message).to.equal('Unauthorized');
				expect(response.body.status).to.equal(401);
			});

			it('should return a 401 if you attempt to login with a password that is not correct.'.cyan, async () => {
				const incorrectPassword = 'fiasnfsnafiasofnisn';
				const inValidUser = { username: 'bobuser', password: incorrectPassword };
				const response = await chai
					.request(server)
					.post('/api/user/login/')
					.send(inValidUser);
				expect(response).to.be.json;
				expect(response).to.be.an('object');
				expect(response).to.have.status(401);
				expect(response.body.name).to.equal('AuthenticationError');
				expect(response.body.message).to.equal('Unauthorized');
				expect(response.body.status).to.equal(401);
			});

			it('should return a valid jwt if your username is in the database and the password is correct.'.cyan, async () => {
				const validUser = { username: 'demo', password: 'thinkful123' };
				const response = await chai
					.request(server)
					.post('/api/user/login/')
					.send(validUser);
				expect(response).to.be.json;
				expect(response).to.be.an('object');
				expect(response).to.have.status(200);
				expect(response.body).to.include.keys('authToken');
			});
		});
	})
	describe('POST api/user/refresh'.cyan.bold, () => {
		it('should return a valid jwt if you have a valid jwt.'.cyan, async () => {
			const response = await chai
				.request(server)
				.post('/api/user/refresh/')
				.set('Authorization', `Bearer ${authToken}`);
			expect(response).to.be.json;
			expect(response).to.be.an('object');
			expect(response).to.have.status(200);
			expect(response.body).to.include.keys('authToken');
		});
	});
});