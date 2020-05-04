import { Component, OnInit } from '@angular/core';

import { IProject, ApiService } from '../api.service';

@Component( {
  selector: 'az-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: [ './project-list.component.scss' ]
} )
export class ProjectListComponent implements OnInit {

  public projects: IProject[];

  constructor( private apiService: ApiService ) { }

  ngOnInit(): void {
    this.apiService.getProjects().subscribe( res => {
      this.projects = [
        {
          id: 'this',
          title: 'This',
          thumbnailUrl: 'url',
          content: 'Cras luctus consectetur vestibulum. Curabitur ante ipsum, interdum eu convallis ut, consequat interdum quam. Cras risus lacus, luctus non vestibulum quis, fringilla sit amet lacus. Nullam at urna in leo congue fermentum eu a massa. Nam fringilla vehicula risus, eu facilisis dui consectetur at. Vestibulum at urna ac sem gravida volutpat. Mauris gravida quam turpis, in ultricies turpis feugiat non. Aliquam erat volutpat. Duis sed dui imperdiet ante iaculis aliquet. Quisque augue sapien, aliquet ac semper vitae, vulputate sed magna. Cras mollis, neque id rhoncus faucibus, magna lacus pellentesque nisl, eget posuere dui lacus ut purus. Duis id dui eu lectus vestibulum imperdiet. Vivamus ac risus quis nulla faucibus blandit in id elit. In hac habitasse platea dictumst.'
        },
        {
          id: 'will',
          title: 'Will',
          thumbnailUrl: 'url',
          content: 'Mauris in magna vestibulum, commodo odio non, pellentesque sapien. Nam scelerisque ullamcorper urna, nec pharetra erat bibendum id. Sed lacinia sapien ut leo porttitor, sed tincidunt orci faucibus. Pellentesque non ornare sem. Morbi ultricies tincidunt arcu, et congue quam venenatis ac. Nulla rutrum ex non massa porta pulvinar. Praesent lacinia metus non ipsum lacinia rhoncus. Nunc bibendum ligula a bibendum egestas. Suspendisse tempor lacus non ex finibus volutpat. Etiam consequat nisl est, sed blandit odio pharetra eu. Mauris pretium tempus scelerisque.'
        },
        {
          id: 'be-a',
          title: 'Be A',
          thumbnailUrl: 'url',
          content: 'Sed maximus mattis erat sed eleifend. Vivamus a mauris sollicitudin lorem vehicula ullamcorper. Quisque magna eros, interdum id consectetur in, ultrices non neque. Donec nisl turpis, egestas nec sapien vitae, porta maximus magna. Pellentesque vulputate quis lorem quis porttitor. Praesent augue mi, fermentum eget gravida sit amet, suscipit at mauris. Cras dignissim mollis lorem. Donec sodales ac felis eget vehicula.'
        },
        {
          id: 'list-of',
          title: 'List Of',
          thumbnailUrl: 'url',
          content: 'Praesent malesuada ex nulla, in elementum est ultrices accumsan. Nulla euismod condimentum mauris a bibendum. Integer ullamcorper id quam id elementum. Ut fringilla orci et pulvinar mattis. Donec eu rutrum urna. Nunc rutrum volutpat dolor, non pellentesque enim fringilla et. Nunc at posuere dui, in bibendum justo. Mauris ultrices consequat tempor. Aenean sit amet magna ut est finibus ullamcorper a dictum metus. Aenean a orci fringilla, congue mi nec, gravida dui. Mauris ut tellus elit. Sed non lorem mattis, ornare erat at, consequat ante. Pellentesque tristique nisi nec massa molestie, eget aliquam lacus dapibus. Cras enim massa, mattis non est a, egestas lacinia magna.'
        },
        {
          id: 'projects',
          title: 'Projects',
          thumbnailUrl: 'url',
          content: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras sit amet vehicula leo, pulvinar ultricies purus. Ut pretium molestie urna quis molestie. Vestibulum tincidunt consequat ex non facilisis. Praesent non mauris vel elit lacinia posuere. Morbi eu porta velit, ut lacinia risus. Duis iaculis imperdiet ipsum, eget mattis orci convallis eget. Etiam venenatis sed urna vel efficitur. Ut sodales dictum augue quis imperdiet. Fusce varius diam massa. Duis et volutpat urna. Curabitur tincidunt, nisi ac tristique venenatis, ante mauris mollis odio, vel maximus urna massa sed ligula. Vivamus laoreet mattis mauris, a vulputate est aliquam vitae. Mauris ullamcorper massa id imperdiet feugiat.'
        },
      ];
    } );
  }
}
