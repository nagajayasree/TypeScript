function largestNum(nums: Array<number>) {
  let largest = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) {
      console.log(nums[i]);
      largest = nums[i];
      //   console.log(largest);
      return largest;
    } else {
      largest = nums[i + 1];
      //   console.log(largest);
      return largest;
    }
  }
  console.log(largest);
}

let nums = [1, 2, 3, 4, 5];
largestNum(nums);
