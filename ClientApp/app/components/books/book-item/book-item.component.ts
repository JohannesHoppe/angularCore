import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'book-item',
  templateUrl: './book-item.component.html'
})
export class BookItemComponent {

  @Input() book: Book;
  @Output() rated = new EventEmitter<Book>();

  rateUp() {
    this.book.rateUp();
    this.rated.emit(this.book);
  }

  rateDown() {
    this.book.rateDown();
    this.rated.emit(this.book);
  }

  getStars() {
    return new Array(this.book.rating);
  }

  constructor() { }
}
