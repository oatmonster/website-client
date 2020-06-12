import { Component, OnInit } from '@angular/core';

import { IProject, ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component( {
  selector: 'az-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: [ './project-list.component.scss' ]
} )
export class ProjectListComponent implements OnInit {

  public project: IProject;

  public projects: IProject[];

  constructor( private apiService: ApiService, private activatedRoute: ActivatedRoute, ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe( ( data: { content: IProject } ) => {
      this.project = data.content;
    } );
    this.apiService.getProjects().subscribe( res => {
      this.projects = res;
    } );
  }
}
