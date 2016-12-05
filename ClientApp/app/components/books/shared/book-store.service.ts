import { Inject, Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Book } from './book';

@Injectable()
export class BookStoreService {

  private url = 'http://localhost:5000/api/Book'

  constructor(private http: Http) { }

  getAll(): Observable<Book[]> {
    return this.http
      .get(this.url)
      .map(response => response.json())
      .map(rawBooks => rawBooks
        .map(r => new Book(r.isbn, r.title, r.description, r.rating)));
  }

  getSingle(isbn: string): Observable<Book> {
    return this.http
      .get(`${this.url}/${isbn}`)
      .map(response => response.json())
      .map(r => new Book(r.isbn, r.title, r.description, r.rating))
  }
}
