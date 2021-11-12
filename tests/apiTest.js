import supertest from "supertest";
import {expect, assert} from "chai";

const request = supertest('https://jsonplaceholder.typicode.com');

describe('Users API', () => {
    it('GET /users', () => {
        return request
            .get('/users')
            .then((res) => {
                expect(res.body).is.be.empty;
            });
    });

    it('GET /users/:id', function () {
        return request
            .get('/users/1')
            .then((res) => {
                expect(res.body.id).is.be.eq(1);
            });

    });

});