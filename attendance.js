function countAttendance(list) {
    var count = 0;
    for (var i = 0; i < list.length; i++) {
        if (list[i] === true) {
            count++;
        }
    }
    console.log(count);
}
countAttendance([true, true, false, true, false, true, false, true, true]);
