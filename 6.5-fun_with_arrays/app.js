//  1.
let obj = {
    carName: "dodge",
    carModel: "challenger",
  };
  const objArr = new Array(100).fill(obj, 0, 100);
  
  //  2.
  const numArr = Array.from({ length: 100 }, (_, i) => i + 1);
  
  //  3.
  const valuesArr = [];
  for (key in obj) {
    valuesArr.push(obj[key]);
  }
  
  //  4.
  const objFromArray = Object.assign({}, valuesArr);
  
  //  5.
  console.log(Array.isArray(numArr));
  
  //  6.
  // coppy that wont effect the original
  const arrayCopyWontEffect = [...objArr];
  
  // coppy that will effect the original
  const arrayCopyWillEffect = numArr;