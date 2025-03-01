/*

Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.

A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in the original array which generate that key.

The provided callback fn will accept an item in the array and return a string key.

The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.

Please solve it without lodash's _.groupBy function.

 

*/

// Enhance Array prototype by adding a groupBy method.
Array.prototype.groupBy = function(fn) {
  const grouped = {};
  for (const item of this) {
    const key = fn(item);
    if (grouped.hasOwnProperty(key)) {
      grouped[key].push(item);
    } else {
      grouped[key] = [item];
    }
  }
  return grouped;
};