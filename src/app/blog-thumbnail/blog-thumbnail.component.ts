import { Component, OnInit, Input } from '@angular/core';

import { IBlogPost } from '../api.service';
import { DateService } from '../date.service';
import { environment } from 'src/environments/environment';

@Component( {
  selector: 'az-blog-thumbnail',
  templateUrl: './blog-thumbnail.component.html',
  styleUrls: [ './blog-thumbnail.component.scss' ]
} )
export class BlogThumbnailComponent implements OnInit {

  @Input() post: IBlogPost;

  constructor( private dateService: DateService ) { }

  ngOnInit(): void { }

  date(): string {
    return this.dateService.formatDate( this.post.date );
  }

  thumbnailUrl(): string {
    return environment.imageUrl + '/blog/' + this.post.id + '/thumbnail';
  }
}
