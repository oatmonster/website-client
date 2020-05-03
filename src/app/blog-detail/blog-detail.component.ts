import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IBlogPost } from '../api.service';

@Component( {
  selector: 'az-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: [ './blog-detail.component.scss' ]
} )
export class BlogDetailComponent implements OnInit {

  public post: IBlogPost;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data
      .subscribe( ( data: { blog: IBlogPost } ) => {
        this.post = data.blog;
      } );
  }
}
