const { Random } = require('@woowacourse/mission-utils');

const initCoins = (money) => {
  const result = [0, 0, 0, 0];
  const unit = [500, 100, 50, 10];

  for (let index = 0; index < 3; index += 1) {
    let maxCoin = money % unit[index];

    if (maxCoin === money) continue;
    result[index] = Random.pickNumberInRange(0, maxCoin);
    money -= unit[index] * result[index];
  }
  result[3] = money / 10;
  return result.slice();
};

module.exports = initCoins;
