import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable()
export class BooksService {
  books: Book[] = [
    { 
      id: 0,
      name: 'Alice in Wonderland',
      author: 'Charles Lutwidge Dodgson a.k.a Lewis Carroll',
      yearOfPublication: '1865 AD',
      genres: ['fiction']
    },
    {
      id: 1,
      name: 'Macbeth',
      author: 'William Shakespeare',
      yearOfPublication: '1606 AD',
      genres: ['tragedy', 'drama']
    },
    {
      id: 2,
      name: 'Aeneid',
      author: 'Virgil',
      yearOfPublication: '19 BC',
      genres: ['epic', 'poetry', 'religion']
    },
    {
      id: 3,
      name: 'There Was a Nation',
      author: 'Chinua Achebe',
      yearOfPublication: '2012',
      genres: ['biography', 'autobiography', 'history']
    },
    {
      id: 4,
      name: 'Weep Not, Child',
      author: 'Ngũgĩ wa Thiong\'o',
      yearOfPublication: '1964',
      genres: ['history', 'fiction', 'drama']
    },
    {
      id: 5,
      name: 'Death of a Salesman',
      author: 'Arthur Miller',
      yearOfPublication: '1949',
      genres: ['tragedy', 'drama']
    },
    {
      id: 6,
      name: 'Lord of the Flies',
      author: 'William Golding',
      yearOfPublication: '1954',
      genres: ['fiction', 'allegory', 'psychology']
    },
    {
      id: 7,
      name: 'Principles des Mathematique et Philosophie',
      author: 'Bertrand Russell',
      yearOfPublication: '1903',
      genres: ['mathematics', 'logic', 'philosophy']
    },
    {
      id: 8,
      name: 'Ijapa Tiroko',
      author: '',
      yearOfPublication: '1973',
      genres: ['juvenile literature', 'yoruba literature', 'folklore']
    },
    {
      id: 9,
      name: 'One Thousand and One Nights/Arabian Nights',
      author: 'Scheherazade (according to legend)',
      yearOfPublication: 'Unknown, but compiled between the 8th and 13th century',
      genres: ['islamic literature', 'arabic literature', 'folklore']
    }
  ];

  constructor() { }

  // In reality, this would be getBooks, 'cause the books will be so many that
  // they have to be paginated.
  getAllBooks(): Book[] {
    return this.books;
  }

  getBook(id: number): Book {
    const targetBook = this.books.find(book =>
      book.id === id
    );
    return targetBook;
  }
}
