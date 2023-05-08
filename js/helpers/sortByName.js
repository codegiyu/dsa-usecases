export function sortByFirstName(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    
    let pivot = arr[0];
    let leftArr = [];
    let rightArr = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i][0].localeCompare(pivot[0]) < 0) {
          leftArr.push(arr[i]);
        } else {
          rightArr.push(arr[i]);
        }
    }

    return [...sortByFirstName(leftArr), pivot, ...sortByFirstName(rightArr)];
}
console.log(sortByFirstName([["get", "bro", 5], ["of", "bro", 7], ["kin", "bro", 11], ["yes", "bro", 9], ["if", "bro", 2]]))

export function sortByLastName(arr) {
  if (arr.length <= 1) {
      return arr;
  }
  
  let pivot = arr[0];
  let leftArr = [];
  let rightArr = [];

  for (let i = 1; i < arr.length; i++) {
      if (arr[i][1].localeCompare(pivot[1]) < 0) {
        leftArr.push(arr[i]);
      } else {
        rightArr.push(arr[i]);
      }
  }

  return [...sortByLastName(leftArr), pivot, ...sortByLastName(rightArr)];
}
console.log(sortByLastName([["get", "brother", 5], ["of", "bruh", 7], ["kin", "bro", 11], ["yes", "bra", 9], ["if", "bruv", 2]]))
