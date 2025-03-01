/*

Design an EventEmitter class. This interface is similar (but with some differences) to the one found in Node.js or the Event Target interface of the DOM. The EventEmitter should allow for subscribing to events and emitting them.

Your EventEmitter class should have the following two methods:

subscribe - This method takes in two arguments: the name of an event as a string and a callback function. This callback function will later be called when the event is emitted.
An event should be able to have multiple listeners for the same event. When emitting an event with multiple callbacks, each should be called in the order in which they were subscribed. An array of results should be returned. You can assume no callbacks passed to subscribe are referentially identical.
The subscribe method should also return an object with an unsubscribe method that enables the user to unsubscribe. When it is called, the callback should be removed from the list of subscriptions and undefined should be returned.
emit - This method takes in two arguments: the name of an event as a string and an optional array of arguments that will be passed to the callback(s). If there are no callbacks subscribed to the given event, return an empty array. Otherwise, return an array of the results of all callback calls in the order they were subscribed.

*/

class EventEmitter {
  constructor() {
    // Map event names to an array of subscribed callbacks.
    this.events = {};
  }

  /**
   * Subscribes a callback function to the given event.
   * @param {string} eventName - The name of the event.
   * @param {Function} callback - The callback function to subscribe.
   * @returns {Object} An object with an unsubscribe() method.
   */
  subscribe(eventName, callback) {
    // Initialize the event list if needed.
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    // Add the callback to the event's array.
    this.events[eventName].push(callback);

    // Return an object with an unsubscribe method.
    return {
      unsubscribe: () => {
        // Remove the callback from the event's array.
        const arr = this.events[eventName];
        const index = arr.indexOf(callback);
        if (index !== -1) {
          // Remove only one occurrence.
          arr.splice(index, 1);
        }
        // Per spec, unsubscribe returns undefined.
      }
    };
  }

  /**
   * Emits an event with the given arguments.
   * @param {string} eventName - The event name to emit.
   * @param {Array} [args=[]] - Optional array of arguments to pass to the callbacks.
   * @returns {Array} An array containing the result of each callback, in order.
   */
  emit(eventName, args = []) {
    // Get the callbacks for the event; if none, return an empty array.
    const callbacks = this.events[eventName] || [];
    const results = [];
    // Call each callback in order and store the result.
    for (const cb of callbacks) {
      results.push(cb(...args));
    }
    return results;
  }
}