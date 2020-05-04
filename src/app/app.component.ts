import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, tap } from 'rxjs/operators';

import { environment } from '../environments/environment';

@Component( {
  selector: 'az-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
} )
export class AppComponent {

  public ie: boolean = false;
  public production: boolean = environment.production;

  constructor( private titleService: Title, private router: Router, private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    // Dynamic page title
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

    // Check for Internet Explorer
    this.ie = ( window.navigator.userAgent.match( /(MSIE|Trident)/ ) || [] ).length > 0;
  }
}
