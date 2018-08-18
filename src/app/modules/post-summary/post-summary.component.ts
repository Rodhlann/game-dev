import { Component, OnInit, Input, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Post } from '../../models/post.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'post-summary',
  templateUrl: './post-summary.component.html',
  styleUrls: ['./post-summary.component.scss']
})
export class PostSummaryComponent {
  @Input()
  public post: Post;
}
