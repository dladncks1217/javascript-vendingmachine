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
    return result;
  }
}

module.exports = VendingMachine;
