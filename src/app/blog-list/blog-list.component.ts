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

  constructor( private apiService: ApiService ) { }

  ngOnInit(): void {
    this.apiService.getBlogPosts().subscribe( res => {
      this.posts = res;
    } );
  }
}