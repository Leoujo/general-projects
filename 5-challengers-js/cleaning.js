const myCleaning = (object) => {
  if (object.name === null) {
    delete object.name;
  } else if ((object.surname === null)) {
    delete object.surname;
  } else if ((object.age === null)) {
    delete object.age;
  } else {
    console.log("Nada a deletar!");
  }
  console.log(object)
};

myCleaning({surname: "Araujo", age: 23 });
