var getSmallest = function (arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        var smallestNum = arr[i];
        if (arr[i] > arr[i + 1]) {
            smallestNum = arr[i + 1];
            console.log(smallestNum);
        }
        else {
            smallestNum = arr[i];
            console.log(smallestNum);
        }
    }
};
var arr = [6, 1, -1];
getSmallest(arr);
