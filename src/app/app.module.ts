import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MarkdownModule } from './markdown/markdown.module';

import { appRoutes } from './routes';

import { ApiService } from './api.service';
import { BlogResolverService } from './blog-detail/blog-resolver.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogThumbnailComponent } from './blog-thumbnail/blog-thumbnail.component';
import { ResumeComponent } from './resume/resume.component';
import { DateService } from './date.service';

@NgModule( {
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot( appRoutes, {
      onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'enabled'
    } ),
    MarkdownModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    ContactComponent,
    ProjectListComponent,
    ProjectDetailComponent,
    BlogListComponent,
    BlogDetailComponent,
    BlogThumbnailComponent,
    ResumeComponent
  ],
  providers: [
    Title
  ],
  bootstrap: [ AppComponent ]
} )
export class AppModule { }
