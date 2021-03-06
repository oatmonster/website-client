import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IBlogPost } from '../api.service';
import { DateService } from '../date.service';
import { environment } from 'src/environments/environment';

@Component( {
  selector: 'az-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: [ './blog-detail.component.scss' ]
} )
export class BlogDetailComponent implements OnInit {

  public post: IBlogPost;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dateService: DateService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe( ( data: { content: IBlogPost } ) => {
      this.post = data.content;
    } );
  }

  thumbnailUrl(): string {
    return environment.imageUrl + '/blog/' + this.post.id + '/thumbnail';
  }

  date(): string {
    return this.dateService.formatDate( this.post.date );
  }
}
