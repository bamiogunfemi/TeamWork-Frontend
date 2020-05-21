import request from 'supertest';
import { expect } from 'chai';
import app from '../src';

describe('', () => {
  it('', () => {
    expect(app).to.be.a('function');
  });

  it('', () => {
    request(app)
      .get('/')
      .end((err, res) => {
        expect(res.status).to.equal(200);
      });
  });
});
