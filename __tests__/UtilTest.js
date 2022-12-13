const { Random } = require('@woowacourse/mission-utils');
const initCoins = require('../src/utils/initCoins');

describe('유틸함수 목록 테스트', () => {
  test('초기 자판기 보유 동전 목록 제작 유틸함수', () => {
    Random.pickNumberInRange = jest.fn();
    Random.pickNumberInRange.mockReturnValueOnce(2);
    Random.pickNumberInRange.mockReturnValueOnce(1);
    Random.pickNumberInRange.mockReturnValueOnce(2);

    expect(initCoins(270)).toEqual([0, 2, 1, 2]);
  });
});
