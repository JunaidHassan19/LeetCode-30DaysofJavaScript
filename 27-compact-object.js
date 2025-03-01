/*

Given an object or array obj, return a compact object.

A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.

You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.

*/

var compactObject = function(obj) {
  // These three if statements deal with when obj is not an iterable object
  // Steps 1-3 as described above
  if (obj === null) return null;
  if (Array.isArray(obj)) return obj.filter(Boolean).map(compactObject);
  if (typeof obj !== "object") return obj;

  // This for loop deals with when obj is an iterable object
  // Steps 4-5 as described above
  const compacted = {};
  for (const key in obj) {
      let value = compactObject(obj[key]);
      if (value) compacted[key] = value;
  }

  return compacted;
};