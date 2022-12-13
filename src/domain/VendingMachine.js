class VendingMachine {
  #coinList;
  #inputMoney;

  constructor(input) {
    this.#inputMoney = Number(input);
  }

  initCoinList(coins) {
    this.#coinList = coins.slice();
  }
}

module.exports = VendingMachine;
