import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-book',
  templateUrl: 'book.component.html',
  styleUrls: ['book.component.css']
})
export class BookComponent implements OnInit {
  book = {
    name: '',
    type: '',
    quantity: ''
  };
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }
  
  addbook(newbook) {
    let bookresult = this.auth.addbook(newbook);
      bookresult.then(() => {
        console.log('Book added');
      })
  }

} 