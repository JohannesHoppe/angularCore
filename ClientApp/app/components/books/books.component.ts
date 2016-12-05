import { Component, OnInit } from '@angular/core';

import { BookStoreService } from './shared/book-store.service';
import { Book } from './shared/book';

@Component({
  selector: 'books',
  templateUrl: './books.component.html'
})
export class BooksComponent implements OnInit {

  books: Book[];

  constructor(private bs: BookStoreService) { }

  ngOnInit() {
     this.bs.getAll().subscribe(books => {
       this.books = books;
       this.reorderBooks();
     });
  }

  reorderBooks() {
    this.books.sort((a, b) => b.rating - a.rating);
  }
}
