import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';

import { AppComponent } from './app.component';
import { GlobalDataServiceService } from './service/global-data-service.service';
import { PostDetailComponent } from './modules/post-detail/post-detail.component';
import { AboutComponent } from './modules/about/about.component';
import { PostsComponent } from './modules/posts/posts.component';
import { ContactComponent } from './modules/contact/contact.component';
import { HomeComponent } from './modules/home/home.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import { NavBarComponent } from './modules/nav-bar/nav-bar.component';
import { HomePostsComponent } from './modules/home/home-posts/home-posts.component';
import { PostService } from './service/post.service';

const AppRoutes: Routes = [
  { path: 'post/:id', component: PostDetailComponent },
  { path: 'about', component: AboutComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PostDetailComponent,
    AboutComponent,
    PostsComponent,
    ContactComponent,
    HomeComponent,
    PageNotFoundComponent,
    NavBarComponent,
    HomePostsComponent,
  ],
  imports: [
    BrowserModule,
    MarkdownModule.forRoot(),
    RouterModule.forRoot(
      AppRoutes,
      { enableTracing: false }
    )
  ],
  providers: [
    GlobalDataServiceService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
