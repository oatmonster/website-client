import { Component, Input, HostBinding, ViewEncapsulation } from '@angular/core';

import * as Prism from 'prismjs';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-applescript';
import 'prismjs/components/prism-typescript';

@Component( {
  selector: 'md-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: [ './highlight.component.scss' ],
  encapsulation: ViewEncapsulation.ShadowDom
} )
export class HighlightComponent {

  public _language;
  public _grammar;
  public _source;

  @HostBinding( 'class' ) get langClass() {
    return this._grammar ? 'language-' + this._language : 'language-none';
  };

  @Input() set language( language: string ) {
    this._language = language;
    this._grammar = language ? Prism.languages[ language ] : undefined;
  }

  @Input() set source( source: string ) {
    this._source = source;
  }

  highlight() {
    return Prism.highlight( this._source, this._grammar, this._language );
  }
}