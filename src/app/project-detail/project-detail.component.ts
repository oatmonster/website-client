import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IProject } from '../api.service';
import { environment } from 'src/environments/environment';

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

  public imageUrl( url: string, webp = false ): string {
    if ( webp ) return environment.imageUrl + '/projects/' + this.project.id + '/' + url.replace( /\.[^/.]+$/, ".webp" );
    else return environment.imageUrl + '/projects/' + this.project.id + '/' + url;
  }

}
