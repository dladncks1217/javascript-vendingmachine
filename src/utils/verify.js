const verify = {
  vendingMachineMoney(input) {
    if (Number.isNaN(Number(input))) throw new Error('[ERROR]');
    if (Number(input) % 10 !== 0) throw new Error('[ERROR]');
  },
};

module.exports = verify;
