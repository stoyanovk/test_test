/**
 * Design of the circle is not trivial. We decided to change number of empty (small)
 * circles when every new service added
 * @param {Number} emptyCircleCount - number of empty circles
 * @param {Number} serviceIndex - number of added services
 *
 * @returns {Number} - new number of empty circles
 */
export default function getEmptyCircleCount(emptyCircleCount, serviceIndex) {
  if (serviceIndex === 0) {
    return emptyCircleCount - 1;
  }
  if (serviceIndex === 1) {
    return emptyCircleCount - 1;
  }
  if (serviceIndex === 2) {
    return emptyCircleCount - 2;
  }
  if (serviceIndex === 3) {
    return emptyCircleCount - 2;
  }
  return emptyCircleCount;
}
