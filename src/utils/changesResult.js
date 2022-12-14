const changesResult = (money, coinList) => {
  const moneyList = [500, 100, 50, 10];
  const resultList = [0, 0, 0, 0];

  for (let index = 0; index < moneyList.length; index++) {
    let changeAmount = Math.floor(money / moneyList[index]);
    while (changeAmount > 0 && coinList[index] > 0 && money > 0) {
      money -= moneyList[index];
      coinList[index]--;
      resultList[index]++;
    }
  }
  return resultList.slice();
};

module.exports = changesResult;
