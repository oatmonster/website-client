import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '../environments/environment';
import { MetaService } from './meta.service';

@Component( {
  selector: 'az-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
} )
export class AppComponent {

  public ie: boolean = false;
  public production: boolean = environment.production;

  constructor( private router: Router, private metaService: MetaService ) { }

  // Method to check if current route is under construction
  // Blog is more or less complete
  public underConstruction(): boolean {
    return !this.router.url.startsWith( '/blog' );
  }

  ngOnInit() {
    // Check for Internet Explorer
    this.ie = ( window.navigator.userAgent.match( /(MSIE|Trident)/ ) || [] ).length > 0;
  }
}
