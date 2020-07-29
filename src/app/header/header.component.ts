import { Component, OnInit, AfterViewInit, OnDestroy, NgZone, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

import { fadeInOut, fadeIn, collapse } from '../animations';

@Component( {
  selector: 'az-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ],
  animations: [ fadeInOut, fadeIn, collapse ]
} )
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild( 'stickySentinel' ) stickySentinel: ElementRef;

  private stuck: boolean = false;
  private showTitle: boolean = false;
  private observer: IntersectionObserver;

  constructor(
    private router: Router,
    private zone: NgZone
  ) { }

  public collapsed = true;

  public toggleCollapsed() {
    this.collapsed = !this.collapsed;
  }

  public collapse() {
    this.collapsed = true;
  }

  public ngOnInit(): void {

    this.router.events.pipe(
      filter( e => e instanceof NavigationEnd )
    ).subscribe( ( e: NavigationEnd ) => {
      this.showTitle = true; // Internet Explorer
      if ( IntersectionObserver ) {
        this.showTitle = this.router.url === '/';
        this.stuck = this.router.url !== '/';
      }
    } );
  }

  public ngAfterViewInit(): void {
    if ( IntersectionObserver ) {
      this.zone.runOutsideAngular( () => {
        this.observer = new IntersectionObserver( ( entries: IntersectionObserverEntry[] ) => {
          this.zone.run( () => {
            this.stuck = !entries[ 0 ].isIntersecting;
          } );
        } );
        this.observer.observe( this.stickySentinel.nativeElement );
      } );
    }
  }

  public ngOnDestroy(): void {
    if ( this.observer ) {
      this.observer.disconnect();
    }
  }

  public displayTitle(): boolean {
    return this.showTitle
  }

  public isStuck(): boolean {
    return this.stuck;
  }
}
