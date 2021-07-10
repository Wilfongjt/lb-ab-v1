import { mount } from '@vue/test-utils';

import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
  process.env.DEPLOY_ENV='';
  const path = require('path');
  dotenv.config({ path: path.resolve(__dirname, '../../.env') });
}

describe('Environment Vars', () => {

  test('Environment Variables', () => {
    expect(process.env.HAPI_URL).not.toBeUndefined();

  })
})
