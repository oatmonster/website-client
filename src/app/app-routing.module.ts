import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComingSoonComponent } from './coming-soon/coming-soon.component';
// import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
// import { ProjectListComponent } from './project-list/project-list.component';
// import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
// import { AboutComponent } from './about/about.component';

import { BlogResolverService } from './blog-detail/blog-resolver.service';
// import { ProjectResolverService } from './project-detail/project-resolver.service';

const appRoutes: Routes = [
  {
    path: 'projects',
    component: ComingSoonComponent,
    data: { title: 'Coming Soon'}
    // component: ProjectListComponent,
    // data: { title: 'Projects' },
    // children: [
    //   {
    //     path: ':id',
    //     component: ProjectDetailComponent,
    //     resolve: {
    //       content: ProjectResolverService
    //     }
    //   }
    // ]
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
    component: ComingSoonComponent,
    data: { title: 'Coming Soon'}
    // component: AboutComponent,
    // data: { title: 'About' }
  },
  {
    path: '',
    redirectTo: '/blog',
    pathMatch: 'full'
    // component: HomeComponent
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: { title: 'Not Found' }
  }
];

@NgModule( {
  imports: [
    RouterModule.forRoot( appRoutes, {
      onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'enabled'
    } ),
  ],
  exports: [
    RouterModule
  ]
} )
export class AppRoutingModule { }
