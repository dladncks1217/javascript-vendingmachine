const changesResult = require('../utils/changesResult');

class VendingMachine {
  #coinList;
  #inputMoney;
  #drinkList;
  #drinkPriceList;
  #drinkAmount;

  constructor(input) {
    this.#inputMoney = Number(input);
    this.#drinkList = [];
    this.#drinkPriceList = [];
    this.#drinkAmount = [];
  }

  initCoinList(coins) {
    this.#coinList = coins.slice();
  }

  initDrinks(drinkList, drinkPriceList, drinkAmount) {
    this.#drinkList = drinkList.slice();
    this.#drinkPriceList = drinkPriceList.slice();
    this.#drinkAmount = drinkAmount.slice();
  }

  hasDrinkName(name) {
    const result = this.#drinkList.includes(name);
    // return result;
    if (result === false) throw new Error('[ERROR]');
  }

  canBuyDrink(name, money) {
    const drinkIndex = this.#drinkList.indexOf(name);
    if (money >= this.#drinkPriceList[drinkIndex] && this.#drinkAmount[drinkIndex] > 0) return true;
    return false;
  }

  buyDrink(name, money) {
    const drinkIndex = this.#drinkList.indexOf(name);
    this.#drinkAmount[drinkIndex]--;
    return money - this.#drinkPriceList[drinkIndex];
  }

  calculateResult(money) {
    return changesResult(money, this.#coinList);
  }
}

module.exports = VendingMachine;
