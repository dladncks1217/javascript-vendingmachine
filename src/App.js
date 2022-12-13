const VendingMachine = require('./domain/VendingMachine');
const InputView = require('./UI/InputView');
const OutputView = require('./UI/OutputView');
const initCoins = require('./utils/initCoins');
const verify = require('./utils/verify');

class App {
  #myMachine;

  play() {
    return this.gameSetting();
  }

  gameSetting() {
    InputView.inputVendingMachineMoney((input) => {
      try {
        verify.vendingMachineMoney(input);
        this.#myMachine = new VendingMachine(input);
        return this.settingResult(input);
      } catch (error) {
        OutputView.printVendingMachineError();
        return this.gameSetting();
      }
    });
  }

  settingResult(money) {
    const coinResult = initCoins(Number(money));

    this.#myMachine.initCoinList(coinResult);
    OutputView.printCoinList(coinResult);
  }
}

const app = new App();
app.play();

module.exports = App;
