import { PostType } from './post-type.enum';

export interface Post {
  image?: string;
  title?: string;
  content?: string;
  type?: PostType;
  date?: string;
  id?: number;
}
