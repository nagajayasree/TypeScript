function abbrevateName(name) {
    var nameArr = name.split(" ");
    //   console.log(nameArr);
    var abbrevated = [];
    for (var i = 0; i < nameArr.length; i++) {
        abbrevated.push(nameArr[i].charAt(0).toUpperCase());
    }
    console.log(abbrevated.join("."));
}
abbrevateName("Jaya Sree");
abbrevateName("naga jaya sree");
