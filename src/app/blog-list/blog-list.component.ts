import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';
import { IBlogPost } from '../api.service';

@Component( {
  selector: 'az-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: [ './blog-list.component.scss' ]
} )
export class BlogListComponent implements OnInit {

  public posts: IBlogPost[];

  public pageCount: number;

  public pageSize = 10;

  constructor( private apiService: ApiService ) { }

  ngOnInit(): void {
    this.apiService.getBlogPosts().subscribe( res => {
      console.log( res );
      this.posts = res.posts;
      this.pageCount = Math.ceil( res.count / this.pageSize );
      console.log( 'Posts:', res.count, 'Pages:', this.pageCount )
    } );
  }
}