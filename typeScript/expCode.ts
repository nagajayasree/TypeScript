export class Example {
  constructor(private lang?: string) {}
  code() {
    console.log("Code in: " + this.lang);
  }
}
