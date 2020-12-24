function abbrevateName(name: string) {
  let nameArr = name.split(" ");
  //   console.log(nameArr);
  let abbrevated = [];
  for (let i = 0; i < nameArr.length; i++) {
    abbrevated.push(nameArr[i].charAt(0).toUpperCase());
  }
  console.log(abbrevated.join("."));
}

abbrevateName("Jaya Sree");
abbrevateName("naga jaya sree");
