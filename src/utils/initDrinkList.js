const initDrinkList = (input) => {
  const data = input.split(';');
  const [drinkList, drinkPriceList, drinkAmount] = [[], [], []];
  data.forEach((value) => {
    value = value.split(']').join('').split('[').join('').split(',');
    drinkList.push(value[0]);
    drinkPriceList.push(Number(value[1]));
    drinkAmount.push(Number(value[2]));
  });
  return [drinkList, drinkPriceList, drinkAmount];
};
module.exports = initDrinkList;
