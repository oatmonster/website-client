import { Component } from '@angular/core';

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

  constructor( private metaService: MetaService ) { }

  ngOnInit() {
    // Check for Internet Explorer
    this.ie = ( window.navigator.userAgent.match( /(MSIE|Trident)/ ) || [] ).length > 0;
  }
}
