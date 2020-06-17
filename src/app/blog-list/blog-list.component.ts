import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { ApiService } from '../api.service';
import { IBlogPost } from '../api.service';

@Component( {
  selector: 'az-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: [ './blog-list.component.scss' ]
} )
export class BlogListComponent implements OnInit, OnDestroy {

  public posts: IBlogPost[];

  public pageCount: number;

  public pageList: number[];

  public page: number;

  public pageSize = 10;

  constructor( private apiService: ApiService, private activatedRoute: ActivatedRoute ) { }

  private queryParamSubscription: Subscription;

  ngOnInit(): void {
    this.queryParamSubscription = this.activatedRoute.queryParams.subscribe( params => {
      this.page = Math.max( 1, parseInt( params[ 'page' ], 10 ) || 1 );
      this.apiService.getBlogPosts( { page: this.page } ).subscribe( res => {
        this.posts = res.posts;
        this.pageCount = Math.ceil( res.count / this.pageSize );
        this.pageCount = 10;
        this.updatePages();
      } );
    } );
  }

  ngOnDestroy(): void {
    this.queryParamSubscription.unsubscribe();
  }

  // Calculate which pages to show in pagination menu
  updatePages() {
    const toDisplay = 5;
    let minPage = this.page - Math.floor( toDisplay / 2 );
    let maxPage = this.page + Math.floor( toDisplay / 2 );
    let extraLeft = Math.max( minPage * -1 + 1, 0 );
    let extraRight = Math.max( maxPage - this.pageCount, 0 );

    maxPage = Math.min( maxPage + extraLeft, this.pageCount );
    minPage = Math.max( 1, minPage - extraRight );

    this.pageList = [];
    for ( let i = minPage; i <= maxPage; i++ ) {
      this.pageList.push( i );
    }
  }
}