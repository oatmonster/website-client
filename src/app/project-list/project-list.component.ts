import { Component, OnInit } from '@angular/core';

import { IProject, ApiService } from '../api.service';

@Component( {
  selector: 'az-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: [ './project-list.component.scss' ]
} )
export class ProjectListComponent implements OnInit {

  public project: IProject;

  public projects: IProject[];

  constructor( private apiService: ApiService ) { }

  ngOnInit(): void {
    this.apiService.getProjects().subscribe( res => {
      this.projects = res;
    } );
  }
}
