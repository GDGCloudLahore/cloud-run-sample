import { jest } from '@jest/globals';

import { hello } from '../hello';

test('helloハンドラのテスト', () => {
  const req = {};
  const res = {
    send: jest.fn(),
  };
  hello(req, res);
  expect(res.send.mock.calls.length).toBe(1);
  expect(res.send.mock.calls[0]).toEqual(['Hello World!']);
});
