const arr = [1, 7, 3, 0, -5, 7, 3, 9];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

const arrayLenght = (arr) => {
  let size = 0;
  for (number in arr) {
    size++;
  }
  return `array length is: ${size}`;
};

console.log(arrayLenght(arr));

const arraySum = (arr) => {
  let sum = 0;
  for (number of arr) {
    sum += number;
  }
  return `array sum is: ${sum}`;
};
console.log(arraySum(arr));


const arrayMulty = (arr) => {
let multy = 1;
for (number of arr) {
    multy *= number;
  }
  return `array multy is: ${multy}`;
}
console.log(arrayMulty(arr));