// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
//make a function that organizes these into individual array that is ordered. 
//For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
//Bonus: Make it so it organizes strings differently from number types.
// i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

const answer = (array) => {
  let number_array = array.filter(val => typeof val === 'number');
  let string_array = array.filter(val => typeof val === 'string');

  number_array.sort((a, b) => a - b);
  string_array.sort((a, b) => a - b);

  const numbers = resulted_form(number_array);
  const strings = resulted_form(string_array);

  if (strings.length) {
    return [numbers].concat([strings]);
  }
  return numbers;
}

const resulted_form = (array) => {
  let new_array = array.slice();
  let curr_index = 0;
  while (curr_index < new_array.length) {
    let value = new_array[curr_index];
    let index = new_array.lastIndexOf(value);
    let count = index + 1 - curr_index;

    if (count > 1) {
      new_array.splice(curr_index, count, Array(count).fill(value));
    }

    curr_index++;
  }
  return new_array;
}

let output = []
const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
output = answer(array);
console.log(output);