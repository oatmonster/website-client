import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component( {
  selector: '<md-iframe>',
  template: `
    <div class="embeded-video">
      <iframe [src]="safeUrl" allowfullscreen></iframe>
    </div>
  `,
  styleUrls: [ './block/block.component.scss' ]
} )
export class IFrameComponent implements OnInit {

  @Input()
  src: string;

  public safeUrl: SafeResourceUrl;

  constructor( private domSanitizer: DomSanitizer ) { }

  ngOnInit(): void {
    this.safeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl( this.src );
  }
}

