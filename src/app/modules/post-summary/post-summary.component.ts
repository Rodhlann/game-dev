import { Component, OnInit, Input, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Post } from '../../models/post.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'post-summary',
  templateUrl: './post-summary.component.html',
  styleUrls: ['./post-summary.component.scss']
})
export class PostSummaryComponent implements OnInit {
  @Input()
  public post: Post;

  public ngOnInit() {
    this.prepareData();
  }

  private prepareData() {
    if (!this.post.image) {
      this.post.image = '../../../assets/no-image.png';
    }
  }
}
