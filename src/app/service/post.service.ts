import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { PostType } from '../models/post-type.enum';

@Injectable()
export class PostService {

  private defaultImage = '../../assets/no-image.png';

  private post: Post = {
    id: 0,
    image: this.defaultImage,
    date: new Date().toDateString(),
    title: 'POST1',
    type: PostType.ART,
    content:
      `Aute sint sint quis consequat occaecat ut.
      Proident cillum et qui incididunt id. Labore
      elit exercitation amet ipsum nisi id officia
      cupidatat enim est.`
  };

  private post1: Post = {
    id: 1,
    image: this.defaultImage,
    date: new Date().toDateString(),
    title: 'POST2',
    type: PostType.CODE,
    content:
      `Aute sint sint quis consequat occaecat ut.`
  };

  private post2: Post = {
    id: 2,
    image: this.defaultImage,
    date: new Date().toDateString(),
    title: 'POST3',
    type: PostType.ART,
    content:
      `Aute sint sint quis consequat occaecat ut.
      Proident cillum et qui incididunt id. Labore
      elit exercitation amet ipsum nisi id officia
      cupidatat enim est.`
  };

  private post3: Post = {
    id: 3,
    image: this.defaultImage,
    date: new Date().toDateString(),
    title: 'POST4',
    type: PostType.CODE,
    content:
      `Aute sint sint quis consequat occaecat ut.`
  };

  private posts = [this.post, this.post1, this.post3, this.post2].sort((a, b) => b.id - a.id);

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
