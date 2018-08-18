import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { PostService } from '../../service/post.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  public allPosts: Post[];
  public posts: Post[];
  public searchText = new Subject();

  constructor(private postService: PostService) {
    this.allPosts = this.postService.getAllPosts();
    this.posts = this.allPosts;
  }

  public search(event: any) {
    const text = event.target.value;
    this.posts = this.allPosts.filter((post: Post) => {
      return post.content.toLowerCase().includes(text.toLowerCase()) ||
        post.title.toLowerCase().includes(text.toLowerCase());
    });
  }
}
