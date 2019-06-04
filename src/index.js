const cars = { BMW: 3, Tesla: 2, Toyota: 1 };

/** 
 * 1. Object.values()
 * Object.values() is a new function that’s similar to Object.keys() but returns 
 * all the values of the Object’s own properties excluding any value(s) in the prototypical chain.
*/
const values = Object.values(cars);
console.log(values);

/**
 * 2. Object.entries()
 *  Object.entries() is related to Object.keys , 
 * but instead of returning just keys, it returns both keys and values in the array fashion. 
 * This makes it very simple to do things like using objects in loops or converting objects into Maps.
 */
for (let [key, value] of Object.entries(cars)) {
  console.log(`key:${key}, value:${value}`);
}

/**
 * 3. String padding
 * Two instance methods were added to String — String.prototype.padStart and String.prototype.padEnd 
 * — that allow appending/prepending either an empty string or some other string to the start or 
 * the end of the original string.
 */

/**
 * 3.1 padStart example:
 * In the below example, we have a list of numbers of varying lengths. We want to prepend “0” so that 
 * all the items have the same length of 3 digits for display purposes. 
 * We can use padStart(3, '0') to easily achieve this.
 */
const numbers = [1, 3, 4, 10, 20, 51, 90, 100, 101, 200]
numbers.map(unformatted => console.log(unformatted.toString().padStart(3, '0')))