export class Book {

  static empty(): Book {
    return new Book('', '', '', 0);
  }

  constructor(public isbn: string,
    public title: string,
    public description: string,
    public rating = 0) {
  }

  rateUp() {

    if (this.rating > 4) {
      return;
    }

    this.rating++;

}
  rateDown() {
    if (this.rating < 1) {
      return;
    }

    this.rating--;
  }
}
