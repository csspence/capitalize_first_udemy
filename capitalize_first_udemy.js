/*
JavaScript Algorithms and Data Structures Masterclass

capitalizeFirst
Write a recursive function called capitalizeFirst.  Given an array of strings, captialize the first letter of each string in the array.
*/

const capitalizeFirst = (arr) => {
  let newArr = [];
  const innerFunc = (array, ind) => {
    newArr.push(array[ind][0].toUpperCase() + array[ind].slice(1, array[ind].length));
    if(ind < array.length) {
      innerFunc(arr, ind + 1);
    }
  }
  innerFunc(arr, 0);

  return newArr;
}

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
