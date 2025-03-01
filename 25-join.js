/*

Given two arrays arr1 and arr2, return a new array joinedArray. All the objects in each of the two inputs arrays will contain an id field that has an integer value. 

joinedArray is an array formed by merging arr1 and arr2 based on their id key. The length of joinedArray should be the length of unique values of id. The returned array should be sorted in ascending order based on the id key.

If a given id exists in one array but not the other, the single object with that id should be included in the result array without modification.

If two objects share an id, their properties should be merged into a single object:

If a key only exists in one object, that single key-value pair should be included in the object.
If a key is included in both objects, the value in the object from arr2 should override the value from arr1.

*/

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
  const result = {};
  for (let i = 0; i < arr1.length; i++) {
      result[arr1[i].id] = arr1[i];
  } 
  for (let i = 0; i < arr2.length; i++) {
      if (result[arr2[i].id]) {
          for (const key in arr2[i]) result[arr2[i].id][key] = arr2[i][key];  
      } else {
          result[arr2[i].id] = arr2[i];
      }
  } 

  return Object.values(result);
};