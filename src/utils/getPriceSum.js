export default function getPriceSum(array) {
  return array.reduce((acc, item) => (acc += parseFloat(item.cost_per_day)), 0);
}
