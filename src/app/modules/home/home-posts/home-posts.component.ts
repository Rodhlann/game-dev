import { Component, OnInit, Input, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Post } from '../../../models/post.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'home-posts',
  templateUrl: './home-posts.component.html',
  styleUrls: ['./home-posts.component.scss']
})
export class HomePostsComponent {
  @Input()
  public posts: Post[];
}
