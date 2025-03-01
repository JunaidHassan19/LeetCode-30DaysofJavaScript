/*

Given an array of asynchronous functions functions, return a new promise promise. Each function in the array accepts no arguments and returns a promise. All the promises should be executed in parallel.

promise resolves:

When all the promises returned from functions were resolved successfully in parallel. The resolved value of promise should be an array of all the resolved values of promises in the same order as they were in the functions. The promise should resolve when all the asynchronous functions in the array have completed execution in parallel.
promise rejects:

When any of the promises returned from functions were rejected. promise should also reject with the reason of the first rejection.
Please solve it without using the built-in Promise.all function.

 

*/

function promiseAll(functions) {
  return new Promise((resolve, reject) => {
    const results = new Array(functions.length);
    let completed = 0;
    
    functions.forEach((fn, index) => {
      // Call each function immediately (in parallel)
      try {
        const promise = fn();
        promise
          .then(value => {
            results[index] = value;
            completed++;
            // When all promises have resolved, resolve with the results array.
            if (completed === functions.length) {
              resolve(results);
            }
          })
          .catch(err => {
            // Reject immediately if any promise rejects.
            reject(err);
          });
      } catch (err) {
        // In case calling fn() throws an error synchronously.
        reject(err);
      }
    });
  });
}