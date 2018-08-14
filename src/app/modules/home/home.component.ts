import { Component, OnInit } from '@angular/core';
import { PostService } from '../../service/post.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public recentPosts: Post[];

  constructor(private postService: PostService) {
    this.recentPosts = this.postService.getRecentPosts();
  }
}
