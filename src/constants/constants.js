const MESSAGE = {
  COIN_LIST: (coins) =>
    `500원 - ${coins[0]}개\n100원 - ${coins[1]}개\n50원 - ${coins[2]}개\n10원 - ${coins[3]}개\n`,

  RESULT_COIN_LIST: (coins) => {
    let result = '';
    if (coins[0] > 0) result += `500원 - ${coins[0]}개\n`;
    if (coins[1] > 0) result += `100원 - ${coins[1]}개\n`;
    if (coins[2] > 0) result += `50원 - ${coins[2]}개\n`;
    if (coins[3] > 0) result += `10원 - ${coins[3]}개\n`;
    return result;
  },

  LEFT_MOENY: (money) => `투입 금액: ${money}원`,
  // 잔돈 출력
};

const INPUT = {
  VENDING_MACHINE: '자판기가 보유하고 있는 금액을 입력해 주세요.',
  DRINK: '상품명과 가격, 수량을 입력해 주세요.',
  MY_MONEY: '투입 금액을 입력해 주세요.',
  BUY_DRINK: '구매할 상품명을 입력해 주세요.',
};

module.exports = { MESSAGE, INPUT };
