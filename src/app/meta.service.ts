import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, tap, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable( {
  providedIn: 'root'
} )
export class MetaService {

  canonicalUrl: HTMLLinkElement;
  nextURL: HTMLLinkElement;
  prevURL: HTMLLinkElement;

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    @Inject( DOCUMENT ) private document: Document
  ) {

    // Setup canonical link
    this.canonicalUrl = this.document.createElement( 'link' );
    this.canonicalUrl.setAttribute( 'rel', 'canonical' );
    document.head.append( this.canonicalUrl );

    this.nextURL = this.document.createElement( 'link' );
    this.nextURL.setAttribute( 'rel', 'next' );

    this.prevURL = this.document.createElement( 'link' );
    this.prevURL.setAttribute( 'rel', 'prev' );

    // Dynamic page titles
    this.router.events.pipe(
      filter( e => e instanceof NavigationEnd ),
      tap( ( e: NavigationEnd ) => {
        console.log( e.url );
        // Set canonical url to default value on navigation
        // (can be changed to a different value using setCanonicalUrl)
        this.canonicalUrl.setAttribute( 'href', environment.rootUrl + e.url );

        this.nextURL.remove();
        this.prevURL.remove();
      } ),
      map( () => {
        const child = this.activatedRoute.firstChild;
        if ( child.snapshot.data[ 'content' ] === null ) {
          return 'Page Not Found';
        } else if ( child.snapshot.data[ 'content' ] && child.snapshot.data[ 'content' ][ 'title' ] ) {
          return child.snapshot.data[ 'content' ][ 'title' ];
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

  setCanonicalUrl( url: string ) {
    this.canonicalUrl.setAttribute( 'href', environment.rootUrl + url );
  }

  setNextURL( url: string ) {
    this.nextURL.remove();
    this.nextURL.setAttribute( 'href', environment.rootUrl + url );
    this.document.head.append( this.nextURL );
  }

  removeNextURL() {
    this.nextURL.remove();
  }

  setPrevUrl( url: string ) {
    this.prevURL.remove();
    this.prevURL.setAttribute( 'href', environment.rootUrl + url );
    this.document.head.append( this.prevURL );
  }

  removePrevUrl() {
    this.prevURL.remove();
  }

}