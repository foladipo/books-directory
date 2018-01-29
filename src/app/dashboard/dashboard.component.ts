import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  books = [
    { 
      name: 'Alice in Wonderland',
      author: 'Charles Lutwidge Dodgson a.k.a Lewis Carroll',
      yearOfPublication: '1865 AD',
      genres: ['fiction']
    },
    {
      name: 'Macbeth',
      author: 'William Shakespeare',
      yearOfPublication: '1606 AD',
      genres: ['tragedy', 'drama']
    },
    {
      name: 'Aeneid',
      author: 'Virgil',
      yearOfPublication: '19 BC',
      genres: ['epic', 'poetry', 'religion']
    },
    {
      name: 'There Was a Nation',
      author: 'Chinua Achebe',
      yearOfPublication: '2012',
      genres: ['biography', 'autobiography', 'history']
    },
    {
      name: 'Weep Not, Child',
      author: 'Ngũgĩ wa Thiong\'o',
      yearOfPublication: '1964',
      genres: ['history', 'fiction', 'drama']
    },
    {
      name: 'Death of a Salesman',
      author: 'Arthur Miller',
      yearOfPublication: '1949',
      genres: ['tragedy', 'drama']
    },
    {
      name: 'Lord of the Flies',
      author: 'William Golding',
      yearOfPublication: '1954',
      genres: ['fiction', 'allegory', 'psychology']
    },
    {
      name: 'Principles des Mathematique et Philosophie',
      author: 'Bertrand Russell',
      yearOfPublication: '1903',
      genres: ['mathematics', 'logic', 'philosophy']
    },
    {
      name: 'Ijapa Tiroko',
      author: '',
      yearOfPublication: '1973',
      genres: ['juvenile literature', 'yoruba literature', 'folklore']
    },
    {
      name: 'One Thousand and One Nights/Arabian Nights',
      author: 'Scheherazade (according to legend)',
      yearOfPublication: 'Unknown, but compiled between the 8th and 13th century',
      genres: ['islamic literature', 'arabic literature', 'folklore']
    }
  ];
  constructor() { }

  ngOnInit() {
  }
}
