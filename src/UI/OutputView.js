const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../constants/constants');

const OutputView = {
  printCoinList(list) {
    Console.print(MESSAGE.COIN_LIST(list));
  },
  printLeftMoney(money) {
    Console.print(MESSAGE.LEFT_MOENY(money));
  },

  printVendingMachineError() {
    Console.print('[ERROR]');
  },

  printInputDrinks() {
    Console.print('[ERROR]');
  },
};

module.exports = OutputView;
