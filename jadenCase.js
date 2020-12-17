function jadenCase(word) {
    var w1 = word.split(" ");
    var word2 = [];
    console.log(w1);
    for (var i = 0; i < w1.length; i++) {
        console.log(w1[i]);
        word2.push(w1[i].charAt(0).toUpperCase() + w1[i].slice(1, w1[i].length));
    }
    console.log(word2.join(" "));
}
jadenCase("Hi, i am js");
