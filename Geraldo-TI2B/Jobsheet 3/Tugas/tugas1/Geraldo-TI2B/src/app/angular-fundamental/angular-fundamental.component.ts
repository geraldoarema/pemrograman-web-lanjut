import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-fundamental',
  templateUrl: './angular-fundamental.component.html',
  styleUrls: ['./angular-fundamental.component.css']
})
export class AngularFundamentalComponent implements OnInit {

  title = '3 Authors';

  array = [
    {id : 0, column1 : 'author1'},
    {id : 1, column1 : 'author2'},
    {id : 2, column1 : 'author3'}

  ]  ;
  

  constructor() { }

  ngOnInit() {
  }

}
