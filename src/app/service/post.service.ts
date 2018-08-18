import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { PostType } from '../models/post-type.enum';
import * as posts from '../../data/posts/2018/posts';

@Injectable()
export class PostService {
  private posts: Post[];

  constructor() {
    this.posts = posts.default.sort((a, b) => b.id - a.id);
  }

  public getAllPosts(): Post[] {
    return this.posts;
  }

  public getArtPosts(): Post[] {
    return this.posts.filter((post: Post) => post.type === PostType.ART);
  }

  public getCodePosts(): Post[] {
    return this.posts.filter((post: Post) => post.type === PostType.CODE);
  }

  public getRecentPosts(): Post[] {
    return this.posts
    .slice(0, 4);
  }

  public getPostById(id: any): Post {
    return this.posts.filter((post: Post) => +post.id === +id)[0];
  }
}
