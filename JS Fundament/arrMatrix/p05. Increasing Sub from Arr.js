function increasingArr(arr) {
    let startNum = arr[0];
    let increasingArr = arr.filter((num, index) => num >= arr[index-1]);
    increasingArr.unshift(startNum);
    console.log(increasingArr.join("\n"));
}

 increasingArr([1,
     3,
     8,
     4,
     10,
     12,
     3,
     2,
     24]
 )