const { Console } = require('@woowacourse/mission-utils');
const { INPUT } = require('../constants/constants');

const InputView = {
  inputVendingMachineMoney(callback) {
    Console.readLine(INPUT.VENDING_MACHINE, callback);
  },

  inputDrinkList(callback) {
    Console.readLine(INPUT.DRINK, callback);
  },

  inputMyMoney(callback) {
    Console.readLine(INPUT.MY_MONEY, callback);
  },

  inputBuyDrinkName(callback) {
    Console.readLine(INPUT.BUY_DRINK, callback);
  },
};

module.exports = InputView;
