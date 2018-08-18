import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { PostService } from '../../service/post.service';

@Component({
  selector: 'app-code-view',
  templateUrl: './code-view.component.html',
  styleUrls: ['./code-view.component.scss']
})
export class CodeViewComponent {
  public posts: Post[];

  constructor(private postService: PostService) {
    this.posts = this.postService.getCodePosts();
  }
}
