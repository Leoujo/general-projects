const stringCounter = (letter, string) => {
  var cont = 0;
  for (var i in string) {
    if (letter == string[i]) {
      cont++;
    }
  }

  console.log("Essa letra aparece um total de " + cont + (cont === 1 ? " vez" : " vezes"));
};

stringCounter("x", "Leonardo");
