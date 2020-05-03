import { Component, OnInit } from '@angular/core';

import { IProject, ApiService } from '../api.service';

@Component( {
  selector: 'az-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: [ './project-list.component.scss' ]
} )
export class ProjectListComponent implements OnInit {

  public projects: IProject[];

  constructor( private apiService: ApiService ) { }

  ngOnInit(): void {
    this.apiService.getProjects().subscribe( res => {
      this.projects = [
        {
          id: 'test-project-1',
          title: 'Test Project 1',
          thumbnailUrl: 'url'
        },
        {
          id: 'test-project-2',
          title: 'Test Project 2',
          thumbnailUrl: 'url'
        },
        {
          id: 'test-project-3',
          title: 'Test Project 3',
          thumbnailUrl: 'url'
        },
        {
          id: 'test-project-4',
          title: 'Test Project 4',
          thumbnailUrl: 'url'
        },
      ];
    } );
  }

  range( n: number ) {
    return Array( n );
  }

}
