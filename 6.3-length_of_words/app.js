arr = ['boo', 'doooo', 'hoo', 'ro']

const strLenght = (arr) => {
    const array = [];
    for (let i = 0; i < arr.length; i++) {
array.push(arr[i].length);

    }
    return array;
}
console.log(strLenght(arr));