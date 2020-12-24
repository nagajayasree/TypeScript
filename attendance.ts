function countAttendance(list: boolean[]) {
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] === true) {
      count++;
    }
  }
  console.log(count);
}

countAttendance([true, true, false, true, false, true, false, true, true]);
