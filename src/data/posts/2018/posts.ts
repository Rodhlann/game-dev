import { PostType } from '../../../app/models/post-type.enum';
import { Post } from '../../../app/models/post.model';

const posts: Post[] = [
  {
    id: 0,
    date: 'Sat Aug 18 2018',
    image: '../../assets/robo_small.gif',
    title: 'Welcome to the blog!',
    content:
      `
      After a few days of throwing this thing together I am excited to finally release v1
      of my personal art blog! I have been thinking about doing something like this for a
      very long time and I think that finally putting the effort in to
      create a blog really says a lot about how pumped I am to track my progress and share those results
      with all of you!

      I have been interested in developing a game for a long time now, and despite a few good attempts
      I haven't really made any progress. I've learned a lot here and there, but overall it's just
      been too difficult for me to throw something together on the large scale. Most of the experience so
      far has been sort of just building small things in Unity or Unreal and learning what I can
      before checking a project off the list and moving on to something else. My hope now is that
      I can just go ahead and build an entire game. It feels a little ambitious, but I think I really
      just need to commit to it or it won't ever get done!

      I hope that this blog and the process of creating a full game allows me to discover something about game development
      and maybe something about myself! If you're reading this, please reach out! I would love any feedback
      or advice, as I'm truly new to all of this. I have been considering adding a subscribe
      system to the blog, but I'm not really convinced it's worth it unless there's actually interest
      in following this project. So let me know!

      <3 Tim
      `
  }
];

export default posts;
