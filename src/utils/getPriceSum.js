/**
 * calculates final price
 * @param {Array} services - added services
 *
 * @returns {Number} - calculated price
 */
export default function getPriceSum(services) {
  return services.reduce(
    (acc, item) => (acc += parseFloat(item.cost_per_day)),
    0
  );
}
