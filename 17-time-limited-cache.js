/*

Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

The class has three public methods:

set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.

get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

count(): returns the count of un-expired keys.

*/

class TimeLimitedCache {
  constructor() {
    // Map to store key -> { value, timer }
    this.cache = new Map();
  }
  
  /**
   * Sets the key to hold the given value for duration milliseconds.
   * If the key already exists and is unexpired, overwrites its value and duration.
   * @param {number} key 
   * @param {number} value 
   * @param {number} duration in milliseconds
   * @return {boolean} true if the key already existed and was unexpired, false otherwise.
   */
  set(key, value, duration) {
    let existed = false;
    
    // If the key already exists, clear its previous timeout.
    if (this.cache.has(key)) {
      existed = true;
      clearTimeout(this.cache.get(key).timer);
    }
    
    // Set a new timer to remove the key when duration elapses.
    const timer = setTimeout(() => {
      this.cache.delete(key);
    }, duration);
    
    // Save the key with its value and timer.
    this.cache.set(key, { value, timer });
    return existed;
  }
  
  /**
   * Retrieves the value of the key if it exists and hasn't expired.
   * @param {number} key 
   * @return {number} the value if unexpired, or -1 otherwise.
   */
  get(key) {
    if (!this.cache.has(key)) return -1;
    return this.cache.get(key).value;
  }
  
  /**
   * Returns the number of unexpired keys.
   * @return {number}
   */
  count() {
    return this.cache.size;
  }
}