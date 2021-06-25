import request from 'supertest';
import {expect} from 'chai';

import {createServer} from 'server';

const app = createServer();

describe("dashboard routes", () =>{
    it("/auth responds with 200", (done) =>{
        request(app).get("/dashboard").expect(200, done);
    })
})