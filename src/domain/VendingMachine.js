class VendingMachine {
  #coinList;
  #inputMoney;

  constructor(coins) {
    this.#coinList = coins.slice();
  }

  setMoney(input) {
    this.#inputMoney = Number(input);
  }
}

module.exports = VendingMachine;
