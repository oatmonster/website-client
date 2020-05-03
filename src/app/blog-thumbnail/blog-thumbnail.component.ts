import { Component, OnInit, Input } from '@angular/core';
import { IBlogPost } from '../api.service';

@Component( {
  selector: 'az-blog-thumbnail',
  templateUrl: './blog-thumbnail.component.html',
  styleUrls: [ './blog-thumbnail.component.scss' ]
} )
export class BlogThumbnailComponent implements OnInit {

  @Input() post: IBlogPost;
  @Input() size: string;

  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  constructor() { }

  ngOnInit(): void { }

  date(): string {
    let date = new Date( this.post.date );
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    return `${this.months[ month ]} ${day}, ${year}`;
  }
}
