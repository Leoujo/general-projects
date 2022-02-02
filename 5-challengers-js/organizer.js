var persons = [
  { itsMe: false, admin: false, name: "Nicolly" },
  { itsMe: false, admin: true, name: "Kleiton" },
  { itsMe: false, admin: false, name: "Sasuke" },
  { itsMe: true, admin: true, name: "Leonardo" },
  { itsMe: false, admin: true, name: "Jucelino" },
];

const organizer = (personsList) => {
  //se return <0 a vem primeiro que o b
  //se return >0 b vem primeiro que o a
  personsList.sort((a, b) => {
    if (a.itsMe === true && b.itsMe === false) {
      return -1;
    }
  });
  console.log(personsList);

  personsList.sort((a, b) => {
    if (a.admin === true && b.admin === false) {
      return -1;
    }
  });
  console.log(personsList);
};

organizer(persons);
