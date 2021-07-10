import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
  process.env.DEPLOY_ENV=''

  const path = require('path');
  dotenv.config({ path: path.resolve(__dirname, '../../../.env') });
}
//import TestTokenPayload from '../../lib/auth/test_token_payload.js';

//import Jwt from '@hapi/jwt';

import { init } from '../../lib/server.js'


describe('Server Tests', () => {
  let server = null;

  beforeAll(async () => {
    //console.log('test server init');
        server = await init();
    });

  afterAll(async () => {
    // delete from one where pk is "test@user.com"
    //console.log('test server stop');
      await server.stop();
    });
/*
  it('Registered paths responds with 404', async () => {
    // no token required for root
    let paths = [];
    for(let i of server.table()) {
      paths.push(i.path)
    };
    //console.log('paths', paths);
    let path = '/';
    expect(paths.find(element => element === '/')).toBeTruthy();
    //expect(paths.find(element => element === '/restricted')).toBeTruthy();
    //expect(paths.find(element => element === '/time')).toBeTruthy();

  });
*/

  it('salutation / responds with 200', async () => {
    // no token required for root
    const res = await server.inject({
        method: 'GET',
        url: '/greet/james'
    });
    //console.log('res', res.result);
    expect(res.result.status).toEqual('200');
    expect(res.result.msg).toEqual('OK');
    expect(res.result.salutation).toEqual('Hello james');
  });

});
