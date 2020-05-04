import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogResolverService } from './blog-detail/blog-resolver.service';
import { ResumeComponent } from './resume/resume.component';

export const appRoutes: Routes = [
  {
    path: 'projects/:id',
    component: ProjectListComponent,
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
      blog: BlogResolverService
    }
  },
  {
    path: 'blog',
    component: BlogListComponent,
    data: { title: 'Blog' }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { title: 'Contact' }
  },
  {
    path: 'resume',
    component: ResumeComponent,
    data: { title: 'Resume' }
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