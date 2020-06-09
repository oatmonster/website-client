import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

import { environment } from '../environments/environment';

@Injectable( {
  providedIn: 'root'
} )
export class ApiService {

  private projects;
  private projectMap;

  constructor( private httpClient: HttpClient ) {
    this.loadDummyProjects();
  }

  public getBlogPosts( query?: { page?: number, tags?: string[] } ): Observable<Array<IBlogPost>> {
    let params = new HttpParams();
    if ( query ) {
      params = this.parseQuery( query );
    }

    return this.httpClient.get<Array<IBlogPost>>( environment.apiUrl + 'blog', { params: params } ).pipe();
  }

  public getBlogPost( id: string ): Observable<IBlogPost> {
    return this.httpClient.get<IBlogPost>( environment.apiUrl + 'blog/' + id ).pipe();
  }

  public getProjects( query?: { page?: number, tags?: string[] } ) {
    // let params = new HttpParams();
    // if ( query ) {
    //   params = this.parseQuery( query );
    // }
    // return this.httpClient.get<Array<IProject>>( environment.apiUrl + 'projects', { params: params } ).pipe();
    return of( this.projects );
  }

  public getProject( id: string ): Observable<IProject> {
    // return this.httpClient.get<IProject>( environment.apiUrl + 'projects/' + id ).pipe();
    if ( this.projectMap.has( id ) ) {
      return of( this.projectMap.get( id ) );
    } else {
      return throwError( new Error( 'Not found' ) );
    }
  }

  private parseQuery( query ): HttpParams {
    let params = new HttpParams();
    Object.entries( query ).forEach( entry => {
      let key = entry[ 0 ];
      let value = entry[ 1 ];

      if ( query[ key ] ) {
        if ( Array.isArray( value ) ) {
          params = params.set( key, value.join( '+' ) );
        } else {
          params = params.set( key, value.toString() );
        }
      }
    } );

    return params;
  }

  private loadDummyProjects() {
    this.projects = [
      {
        id: 'this',
        title: 'This',
        content: 'Cras luctus consectetur vestibulum. Curabitur ante ipsum, interdum eu convallis ut, consequat interdum quam. Cras risus lacus, luctus non vestibulum quis, fringilla sit amet lacus. Nullam at urna in leo congue fermentum eu a massa. Nam fringilla vehicula risus, eu facilisis dui consectetur at. Vestibulum at urna ac sem gravida volutpat. Mauris gravida quam turpis, in ultricies turpis feugiat non. Aliquam erat volutpat. Duis sed dui imperdiet ante iaculis aliquet. Quisque augue sapien, aliquet ac semper vitae, vulputate sed magna. Cras mollis, neque id rhoncus faucibus, magna lacus pellentesque nisl, eget posuere dui lacus ut purus. Duis id dui eu lectus vestibulum imperdiet. Vivamus ac risus quis nulla faucibus blandit in id elit. In hac habitasse platea dictumst.'
      },
      {
        id: 'will',
        title: 'Will',
        content: 'Mauris in magna vestibulum, commodo odio non, pellentesque sapien. Nam scelerisque ullamcorper urna, nec pharetra erat bibendum id. Sed lacinia sapien ut leo porttitor, sed tincidunt orci faucibus. Pellentesque non ornare sem. Morbi ultricies tincidunt arcu, et congue quam venenatis ac. Nulla rutrum ex non massa porta pulvinar. Praesent lacinia metus non ipsum lacinia rhoncus. Nunc bibendum ligula a bibendum egestas. Suspendisse tempor lacus non ex finibus volutpat. Etiam consequat nisl est, sed blandit odio pharetra eu. Mauris pretium tempus scelerisque.'
      },
      {
        id: 'be-a',
        title: 'Be A',
        content: 'Sed maximus mattis erat sed eleifend. Vivamus a mauris sollicitudin lorem vehicula ullamcorper. Quisque magna eros, interdum id consectetur in, ultrices non neque. Donec nisl turpis, egestas nec sapien vitae, porta maximus magna. Pellentesque vulputate quis lorem quis porttitor. Praesent augue mi, fermentum eget gravida sit amet, suscipit at mauris. Cras dignissim mollis lorem. Donec sodales ac felis eget vehicula.'
      },
      {
        id: 'list-of',
        title: 'List Of',
        content: 'Praesent malesuada ex nulla, in elementum est ultrices accumsan. Nulla euismod condimentum mauris a bibendum. Integer ullamcorper id quam id elementum. Ut fringilla orci et pulvinar mattis. Donec eu rutrum urna. Nunc rutrum volutpat dolor, non pellentesque enim fringilla et. Nunc at posuere dui, in bibendum justo. Mauris ultrices consequat tempor. Aenean sit amet magna ut est finibus ullamcorper a dictum metus. Aenean a orci fringilla, congue mi nec, gravida dui. Mauris ut tellus elit. Sed non lorem mattis, ornare erat at, consequat ante. Pellentesque tristique nisi nec massa molestie, eget aliquam lacus dapibus. Cras enim massa, mattis non est a, egestas lacinia magna.'
      },
      {
        id: 'projects',
        title: 'Projects',
        content: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras sit amet vehicula leo, pulvinar ultricies purus. Ut pretium molestie urna quis molestie. Vestibulum tincidunt consequat ex non facilisis. Praesent non mauris vel elit lacinia posuere. Morbi eu porta velit, ut lacinia risus. Duis iaculis imperdiet ipsum, eget mattis orci convallis eget. Etiam venenatis sed urna vel efficitur. Ut sodales dictum augue quis imperdiet. Fusce varius diam massa. Duis et volutpat urna. Curabitur tincidunt, nisi ac tristique venenatis, ante mauris mollis odio, vel maximus urna massa sed ligula. Vivamus laoreet mattis mauris, a vulputate est aliquam vitae. Mauris ullamcorper massa id imperdiet feugiat.'
      },
    ];
    this.projectMap = new Map();
    this.projects.forEach( project => {
      this.projectMap.set( project.id, project );
    } );
  }

}

export interface IPost {
  id: string;
  title: string;
  subtitle?: string;
  tags?: string[];
  content?: string;
}

export interface IBlogPost extends IPost {
  date?: Date;
}

export interface IProject extends IPost {
  blogPosts?: string[];
}