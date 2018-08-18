import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../models/post.model';
import { PostService } from '../../service/post.service';

@Component({
  selector: 'app-art-view',
  templateUrl: './art-view.component.html',
  styleUrls: ['./art-view.component.scss']
})
export class ArtViewComponent {
  public posts: Post[];

  constructor(private postService: PostService) {
    this.posts = this.postService.getArtPosts();
  }
}
