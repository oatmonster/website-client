import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

import { environment } from '../environments/environment';

@Injectable( {
  providedIn: 'root'
} )
export class ApiService {

  constructor( private httpClient: HttpClient ) { }

  public getBlogPosts( query?: { page?: number, tags?: string[] } ): Observable<{ posts: Array<IBlogPost>, count: number }> {
    let params = new HttpParams();
    if ( query ) {
      params = this.parseQuery( query );
    }

    return this.httpClient.get<{ posts: Array<IBlogPost>, count: number }>( environment.apiUrl + '/blog', { params: params } ).pipe();
  }

  public getBlogPost( id: string ): Observable<IBlogPost> {
    return this.httpClient.get<IBlogPost>( environment.apiUrl + '/blog/' + id ).pipe();
  }

  public getProjects() {
    return this.httpClient.get<Array<IProject>>( environment.apiUrl + '/projects' ).pipe();
  }

  public getProject( id: string ): Observable<IProject> {
    return this.httpClient.get<IProject>( environment.apiUrl + '/projects/' + id ).pipe();
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

}

export interface IBlogPost {
  id: string;
  title: string;
  subtitle?: string;
  tags?: string[];
  content?: string;
  date?: Date;
}

export interface IProject {
  id: string;
  title: string;
  images?: {
    filename: string;
    title: string;
    caption: string;
  }[];
  description: string;
  blogPosts?: string[];
}