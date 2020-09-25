class House {
  private no: number;
  private street: string;

  constructor(no: number, street: string) {
    this.no = no;
    this.street = street;
  }
}

let house = new House(123, "rue montcalm");
