export default function getEmptyCircleCount(circleCount, serviceIndex) {
  if (serviceIndex === 0) {
    return circleCount - 1;
  }
  if (serviceIndex === 1) {
    return circleCount - 1;
  }
  if (serviceIndex === 2) {
    return circleCount - 2;
  }

  return circleCount - 3;
}
