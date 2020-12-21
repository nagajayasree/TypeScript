let getSmallest = function (arr: number[]) {
  for (let i = 0; i < arr.length - 1; i++) {
    let smallestNum = arr[i];
    if (arr[i] > arr[i + 1]) {
      smallestNum = arr[i + 1];
      console.log(smallestNum);
      return smallestNum;
    } else {
      smallestNum = arr[i];
      console.log(smallestNum);
    }
  }
};

let arr = [6, 1, -1];
getSmallest(arr);
