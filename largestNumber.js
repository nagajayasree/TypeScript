function largestNum(nums) {
    var largest = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > nums[i + 1]) {
            console.log(nums[i]);
            largest = nums[i];
            //   console.log(largest);
            return largest;
        }
        else {
            largest = nums[i + 1];
            //   console.log(largest);
            return largest;
        }
    }
    console.log(largest);
}
var nums = [1, 2, 3, 4, 5];
largestNum(nums);
