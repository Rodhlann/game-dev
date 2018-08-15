import { PostType } from './post-type.enum';

export interface Post {
  title?: string;
  content?: string;
  type?: PostType;
  date?: string;
  id?: number;
}
