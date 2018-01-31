import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BooksService } from '../books.service';
import { Book } from '../book';

@Component({
  selector: 'app-book-profile',
  templateUrl: './book-profile.component.html',
  styleUrls: ['./book-profile.component.css']
})
export class BookProfileComponent implements OnInit {
  book: Book;
  constructor(
    private bookService: BooksService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getBook();
  }

  getBook() {
    const bookId = Number(this.route.snapshot.paramMap.get('id'));
    if (Number.isNaN(bookId)) {
      return;
    }

    this.book = this.bookService.getBook(bookId);
  }
}
