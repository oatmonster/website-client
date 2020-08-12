import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IProject } from '../api.service';

@Component( {
  selector: 'az-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: [ './project-detail.component.scss' ]
} )
export class ProjectDetailComponent implements OnInit {

  @Input()
  project: IProject;

  constructor( private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe( ( data: { content: IProject } ) => {
      this.project = data.content;
    } );
  }

  range( n: number ) {
    return Array( n );
  }

}
