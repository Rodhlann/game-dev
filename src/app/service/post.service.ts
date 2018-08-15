import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { PostType } from '../models/post-type.enum';

@Injectable()
export class PostService {

  constructor() { }

  public getRecentPosts(): Post[] {
    const post: Post = {
      date: new Date().toDateString(),
      title: 'POST',
      type: PostType.ART,
      content:
        `Aute sint sint quis consequat occaecat ut.
        Proident cillum et qui incididunt id. Labore
        elit exercitation amet ipsum nisi id officia
        cupidatat enim est.`
    };

    const post1: Post = {
      date: new Date().toDateString(),
      title: 'POST1',
      type: PostType.CODE,
      content:
        `Aute sint sint quis consequat occaecat ut.`
    };

    return [
      post, post1, post, post1
    ];
  }

}
