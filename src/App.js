const VendingMachine = require('./domain/VendingMachine');
const InputView = require('./UI/InputView');
const OutputView = require('./UI/OutputView');
const initCoins = require('./utils/initCoins');
const initDrinkList = require('./utils/initDrinkList');
const verify = require('./utils/verify');

class App {
  #myMachine;
  #myMoney;

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
        OutputView.ErrorPrintVendingMachine();
        return this.gameSetting();
      }
    });
  }

  settingResult(money) {
    const coinResult = initCoins(Number(money));
    this.#myMachine.initCoinList(coinResult);
    OutputView.printCoinList(coinResult);
    return this.inputDrinkList();
  }

  inputDrinkList() {
    InputView.inputDrinkList((input) => {
      try {
        verify.drinkList(input);
        const [nameData, priceData, amountData] = initDrinkList(input);
        this.#myMachine.initDrinks(nameData, priceData, amountData);
        return this.inputMyMoney();
      } catch (error) {
        OutputView.ErrorPrintInputDrinks();
        return this.inputDrinkList();
      }
    });
  }

  inputMyMoney() {
    InputView.inputMyMoney((input) => {
      try {
        verify.myMoney(input);
        this.#myMoney = Number(input);
        return this.buyDrink();
      } catch (error) {
        OutputView.ErrorInputMyMoney();
        return this.inputMyMoney();
      }
    });
  }

  verifyBuyDrink() {
    InputView.inputBuyDrinkName((input) => {
      if (this.#myMachine.hasDrinkName(input)) return this.buyDrink(input);
      return this.verifyBuyDrink();
    });
  }

  buyDrink(input) {}
}

const app = new App();
app.play();

module.exports = App;
