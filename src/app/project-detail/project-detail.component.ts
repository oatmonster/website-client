import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'az-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: [ './project-detail.component.scss' ]
} )
export class ProjectDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  range( n: number ) {
    return Array( n );
  }

}
