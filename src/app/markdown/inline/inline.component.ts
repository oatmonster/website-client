import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MarkdownTreeService } from '../tree/tree.service';
import { mdPhrasingContent } from '../tree/tree-types';
import { MarkdownRootComponent } from '../markdown.component';
import { environment } from 'src/environments/environment';

@Component( {
  selector: '[md-inline]',
  templateUrl: './inline.component.html',
  styleUrls: [ './inline.component.scss' ],
  encapsulation: ViewEncapsulation.None
} )
export class MarkdownInlineComponent {

  constructor( readonly tree: MarkdownTreeService, private root: MarkdownRootComponent ) { }

  @Input( 'md-inline' ) node: mdPhrasingContent;

  // AOT safe children from the node
  get children() { return ( "children" in this.node ) ? this.node.children : [] }

  // Text rendering helper
  public _T( value: string ) { return value || ''; }

  // Image URL from API
  public imageUrl( url: string, webp = false ): string {
    if ( webp ) return environment.imageUrl + '/' + this.tree.type + '/' + this.tree.id + '/' + url.replace( /\.[^/.]+$/, ".webp" );
    else return environment.imageUrl + '/' + this.tree.type + '/' + this.tree.id + '/' + url;
  }

  public rootUrl(): string {
    return environment.rootUrl;
  }
}
