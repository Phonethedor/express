import request from 'supertest';
import { expect } from 'chai';
import app from '../src/index.js';

describe('SERVER', () => {
    it('Deberia retornar respuesta 200', (done) => {
        request(app)
            .get('/')
            .end((err, res) => {
                expect(res.status).to.equal(404);
                done();
            });
    });
});