import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { AboutComponent } from './about/about.component';


import { BlogResolverService } from './blog-detail/blog-resolver.service';
import { ProjectResolverService } from './project-list/project-resolver.service';

export const appRoutes: Routes = [
  {
    path: 'projects/:id',
    component: ProjectListComponent,
    resolve: {
      content: ProjectResolverService
    }
  },
  {
    path: 'projects',
    component: ProjectListComponent,
    data: { title: 'Projects' }
  },
  {
    path: 'blog/:id',
    component: BlogDetailComponent,
    resolve: {
      content: BlogResolverService
    }
  },
  {
    path: 'blog',
    component: BlogListComponent,
    data: { title: 'Blog' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'About' }
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: { title: 'Not Found' }
  }
]