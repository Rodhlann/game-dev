import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../models/post.model';
import { PostService } from '../../service/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent {
  public post: Post;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {
    const id = <Post>(this.route.snapshot.paramMap.get('id'));
    this.post = this.postService.getPostById(id);
    this.prepareData();
  }

  private prepareData() {
    if (!this.post.image) {
      this.post.image = '../../../assets/no-image.png';
    }
  }
}
