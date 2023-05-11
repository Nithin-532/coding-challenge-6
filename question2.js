//Question 2: Write a javascript function that takes an array of numbers and a target number.
//The function should find two different numbers in the array that, when added together, give the target number. 
//For example: answer([1,2,3], 4)should return [1,3]

const answer = (array, target) => {
  array.sort((a, b) => a - b);
  let i = 0;
  let j = array.length - 1;
  while (i < j) {
    let sum = array[i] + array[j]
    if (equals(sum,target)) {
      return [array[i], array[j]];
    }
    else if (sum > target) {
      j--;
    }
    else {
      i++;
    }
  }
  return 'NO PAIR FOUNDED';
}

const equals = (a, b) => {return a === b};

const array = [1, 2, 3];
target = 4;
console.log(answer(array, target));