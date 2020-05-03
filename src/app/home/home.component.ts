import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'az-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
} )
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  range( n: number ) {
    return Array( n );
  }

}
