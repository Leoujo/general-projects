const frame = (row, column) => {
  var line = "+";
  var middleLine = "-"
  if (row > 0 && column > 0) {
    for (var i = 0; i < row -2 ; i++) {
      line = line + "-";
      middleLine = middleLine + " ";
    }
    line = line + "+";
    middleLine = middleLine + "-";

    console.log(line)
    for (var i = 0; i < column -2; i++) {
      console.log(middleLine);
    }
    console.log(line);

  }
};

frame(3, 5);
