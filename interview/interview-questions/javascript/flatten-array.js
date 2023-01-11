/**
 * Implement function that flatten the array i.e.
 *
 * [
 * [1,2],
 * [3,4,5],
 * [6,7],8
 * ]
 *
 * will result in [1,2,3,4,5,6,7,8]
 * Company - Unacademy
 */

const array = [[1, 2], [3, 4, 5], [6, 7], 8];

const customFlat = (array, depth = 1) => {
  const result = [];

  array.forEach((element) => {
    if (Array.isArray(element) && depth > 0) {
      result.push(...customFlat(element, depth - 1));
    } else {
      result.push(element);
    }
  });

  return result;
};

console.log(customFlat(array, 2));
