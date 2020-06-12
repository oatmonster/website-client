import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, tap, map } from 'rxjs/operators';

@Injectable( {
  providedIn: 'root'
} )
export class MetaService {

  constructor(
    private titleService: Title,
    private meta: Meta,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

    // Dynamic page titles
    this.router.events.pipe(
      filter( e => e instanceof NavigationEnd ),
      tap( ( e: NavigationEnd ) => {
        console.log( e.url );
      } ),
      map( () => {
        const child = this.activatedRoute.firstChild;
        if ( child.snapshot.data[ 'blog' ] === null ) {
          return 'Not Found';
        } else if ( child.snapshot.data[ 'project' ] === null ) {
          return 'Not Found';
        } else if ( child.snapshot.data[ 'blog' ] && child.snapshot.data[ 'blog' ][ 'title' ] ) {
          return child.snapshot.data[ 'blog' ][ 'title' ];
        } else if ( child.snapshot.data[ 'project' ] && child.snapshot.data[ 'project' ][ 'title' ] ) {
          return child.snapshot.data[ 'project' ][ 'title' ];
        }
        else if ( child.snapshot.data[ 'title' ] ) {
          return child.snapshot.data[ 'title' ];
        }
        return '';
      } )
    ).subscribe( ( title: string ) => {
      title.trim();
      if ( title.length > 0 ) {
        title += ' | Alex Zhao';
      } else {
        title = 'Alex Zhao';
      }
      this.titleService.setTitle( title );
    } );
  }

}