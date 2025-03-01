/*

Given an object or an array, return if it is empty.

An empty object contains no key-value pairs.
An empty array contains no elements.
You may assume the object or array is the output of JSON.parse.

 

*/

function isEmpty(obj) {
  // If it's an array, check if its length is 0.
  if (Array.isArray(obj)) {
    return obj.length === 0;
  }
  // If it's an object, check if it has no own properties.
  if (typeof obj === 'object' && obj !== null) {
    return Object.keys(obj).length === 0;
  }
  // For any other type (shouldn't occur based on constraints), return false.
  return false;
}