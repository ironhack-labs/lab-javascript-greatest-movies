# Array methods cheatsheet



### array.length

- length will simply return the length of the array.
```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array.length);
// 10
```



  ### array.concat(array2, array3)

  - concat will merge two or more arrays. This method will not change
    the original arrays, but instead creates a new array.

  ```javascript
const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];
const array3 = [9, 10, 11, 12];

const newArray = array1.concat(array2, array3);

console.log(newArray);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  ```

   

### array.push(value)

  - push will **add** one or more elements to an array
  ```javascript
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  array.push(11, 12, 13);
  
  console.log(array);
  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
  
  ```



### array.pop()

  - pop will remove the **last** element in an array, and return that

  element if we store it in a variable.
  ```javascript
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const removedElement = array.pop(); //not necessary to store it in a variable
  
  console.log(array);
  // [1, 2, 3, 4, 5, 6, 7, 8, 9]
  
  console.log(removedElement);
  // 10
  ```



  ### array.shift()

  - shift will remove the **first** element in an array, and return that
    element if we store it in a variable.
  ```javascript
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  const removedElement = array.shift();
  
  console.log(array);
  // [2, 3, 4, 5, 6, 7, 8, 9, 10]
  
  console.log(removedElement);
  // 1
  ```



  ### array.unshift(value)

  - unshift will **add** one or more elements to the beginning of an
    array, and return the new array.
  ```javascript
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  array.unshift(-2, -1, 0);
  
  console.log(array);
  // [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  ```



  ### array.join()

  - join will create a single string by joining all of the elements in
    an array. If no argument is passed, a comma will be used to separate
    the items.
  ```javascript
  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday",
  "Friday"];
  
  weekdays.join(",");
  // "Monday,Tuesday,Wednesday,Thursday,Friday"
  
  weekdays.join(" ");
  // "Monday Tuesday Wednesday Thursday Friday"
  
  weekdays.join("-");
  // "Monday-Tuesday-Wednesday-Thursday-Friday"
  ```



### string.split()

  - split divides a **string** (not an array, a string!) into an ordered list of substrings, puts these substrings into an array, and returns the array.  The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.  

  ```javascript
const weekdays = "Monday, Tuesday, Wednesday, Thursday, Friday";

weekdays.split(",");
// ["Monday", " Tuesday", " Wednesday", " Thursday", " Friday"

weekdays.split(", ");
// ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
  ```



  ### array.reverse()

  - Reverse will reverse the array. The reverse method will reverse the
    **original** array!

  ```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array.reverse();
console.log(array);
// [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
  ```



#### Useful combination! string.split("").reverse().join("")

- This combination will reverse a string with a single line of code without having to loop through every character of the string

```javascript
const word = "pizzabytes";
const reverseWord = word.split("").reverse().join("");

console.log(reverseWord);
//"setybazzip"
```



  ### indexOf - lastIndexOf

  - indexOf will return the first index at which a given element can be
    found in the array. It will return -1 if not found. The first index is 0.
  - lastIndexOf will return the first index at which a given element
    can be found in the array. lastIndexOf will search from the **end to
    start** It will return -1 if not found.
  ```javascript
  const array = ["hello", "how", "are", "you", "hello"];
  array.indexOf("hello"); // 0
  array.indexOf("are"); // 2
  array.lastIndexOf("hello") // 4
  ```



  ### array.forEach( (el) => { })

  - forEach will basically just a loop over the array, it has no return
    value. You can also **not** return or break from within the loop.
  ```javascript
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  array.forEach((el) => {
    console.log(el) 
  })
  
  //1
  //2
  //3
  //4
  //5
  //6
  //7
  //8
  //9
  //10
  
  const newArray = [];
  
  array.forEach( (element) => {   //be sure to check the parentheses
    if(element < 6){
      newArray.push(element);
    } 
  })  //be sure to check the closing curly braces and parentheses
  
  console.log(newArray);
  // [1, 2, 3, 4, 5]
  ```



  ### array.sort( (a, b) => {return a - b})

- sort will loop over the array, run a function comparing that element  with the current contents of the new array and then place that element  in the new array at its correct position.

  ```javascript
  const array = [5, 2, 7, 9, 3, 6, 1, 10, 8, 4];
  
  let ascendingArray = array.sort((a, b) => {
    return a - b;
  })
  
  console.log(ascendingArray);
  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  
  let descendingArray = array.sort((a, b) => {
    return b - a;
  })
  
  console.log(descendingArray);
  // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
  
  const numbersArray = [22, 23, 99, 65, 1]
  
  //sorting numbers
  let sortedNumbers = numbersArray.sort((el1, el2) => {
    if(el1 === el2) {
      return 0
    } else if (el1 < el2) {
      return -1
    } else {
      return 1
    }
  })
  
  console.log(sortedNumbers);
  // [1, 22, 23, 65, 99]
  ```



### array.map( (el) => {})

  - map will loop over the array, do something to each element, then
    return a new array.
  - Useful for: creating variation of an array from a template array
  - Creating a new array with single properties from objects
  - Making copies of arrays



  ```javascript
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  const newArray = array.map((el) => {
    return element * 3;
  })
  
  console.log(newArray);
  // [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]
  
  
  //Make a new array taking a property from an array of objects
  const people = [
      {name: "joe", age: 23}, {name: "jack", age: 30},
  {name: "john", age: 12}]
  
  const names = people.map((person) => {
    return person.name
  })
  
  console.log(names);
  // ["joe", "jack", "john"]
  
  
  //Make a copy of an array
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  const arrayCopy = array.map((element) => { return element } )
  
  console.log(arrayCopy)
  //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  
  ```



  ### array.reduce( (acc, el) => {}, startingValue)

  - reduce will loop over the array and execute a function with access
    to the accumulator, the current value, the index and the original
    array. It will return one value.
  ```javascript
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  let total = array.reduce((acc, el) => {
    acc += el;
    return acc
  }, 0)
  
  console.log(total);
  // 55 (1 + 2 ... 9 + 10)
  ```



  ### array.filter((el) => {condition that equals true/false})

  - filter will loop over the array and perform a test on each element.
    If the element passes the test, it will be added to the returned
    array.
  ```javascript
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  const newArray = array.filter((element, index) => {
    return element > 3;
  })
  
  console.log(newArray);
  
  // [4, 5, 6, 7, 8, 9, 10]
  ```



### array.slice()

  - slice will return a copy of a portion of an array into a new array

  selected from begin to end indexes (end not included). The original
  array will **not** be affected. negative indexes will start from the
  end of the array.

  ```javascript
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
"Saturday", "Sunday"];

const copy = days.slice();

const weekdays = days.slice(0, 5);

const weekend = days.slice(-2);

console.log(copy);
// ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

console.log(weekdays);
// [Monday, Tuesday, Wednesday, Thursday, Friday]

console.log(weekend);
// [Saturday, Sunday]
  ```



  ### array.splice()

  - splice will change the contents of an array by removing or replacing
    existing elements, as well as possibly adding new elements. It is also
    possible to assign a variable to the removed elements.

  ```javascript
const days = ["Monday", "Tuesday", "Wednesday", "Thursday",
"Saturday", "Sunday"];

const removed = days.splice(4, 2, "Friday");
//4: starting index; 2: how many elements; new values in here

console.log(days);
// ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

console.log(removed);
// [Saturday, Sunday]
  ```

