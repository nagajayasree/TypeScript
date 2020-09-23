// type assertions
let msg;
msg = 1;
let endsWithC = (<string>msg).endsWith("c");
let otherWay = (msg as string).endsWith("c");
