import { Component, OnInit, Input } from '@angular/core';

import { IProject } from '../api.service';

@Component( {
  selector: 'az-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: [ './project-detail.component.scss' ]
} )
export class ProjectDetailComponent implements OnInit {

  @Input()
  project: IProject;

  constructor() { }

  ngOnInit(): void {
  }

  range( n: number ) {
    return Array( n );
  }

}
