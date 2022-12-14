const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../constants/constants');

const OutputView = {
  printCoinList(list) {
    Console.print(MESSAGE.COIN_LIST(list));
  },
  printLeftMoney(money) {
    Console.print(MESSAGE.LEFT_MOENY(money));
  },

  committedMoney(money) {
    Console.print(MESSAGE.LEFT_MOENY(money));
  },

  printResultCoinList(list) {
    Console.print(MESSAGE.RESULT_COIN_LIST(list));
  },

  endConsole() {
    Console.close();
  },

  ErrorPrintVendingMachine() {
    Console.print('[ERROR]');
  },

  ErrorPrintInputDrinks() {
    Console.print('[ERROR]');
  },

  ErrorInputMyMoney() {
    Console.print('[ERROR]');
  },
};

module.exports = OutputView;
