import { common } from "../helper/common";

export class PostReactions {
  constructor(likes: number, dislikes: number) {
    this.likes = likes;
    this.dislikes = dislikes;
  }
  likes: number;
  dislikes: number;
}

export class Post {
  constructor(
    id: number,
    title: string,
    body: string,
    tags: string[],
    reactions: PostReactions,
    views: number,
    userId: number,
  ) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.tags = tags;
    this.reactions = reactions;
    this.views = views;
    this.userId = userId;
    this.lastTimeOfEdit = common.RandomDate(
      new Date(2020, 0, 1).getTime(),
      new Date().getTime(),
      0,
      23,
    );
    this.firstTimeOfCreate = common.RandomDate(
      new Date(2020, 0, 1).getTime(),
      this.lastTimeOfEdit.getTime(),
      0,
      23,
    );
    this.imgSrc = common.getRandomImage();
  }

  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: PostReactions;
  views: number;
  userId: number;
  lastTimeOfEdit: Date;
  firstTimeOfCreate: Date;
  imgSrc: String;
}

interface PostApiResponse {
  posts: Post[];
}

export async function getPostsAsync(
  pageIndex: number,
  countOfPage: number,
): Promise<Post[]> {
  var skip = (pageIndex - 1) * countOfPage;
  var resp = await common.getDataAsync<PostApiResponse>(
    `https://dummyjson.com/posts?limit=${countOfPage}&skip=${skip}`,
  );
  // 使用 Promise.all
  return Promise.all(
    resp.posts.map((post) => {
      return new Post(
        post.id,
        post.title,
        post.body,
        post.tags,
        post.reactions,
        post.views,
        post.userId,
      );
    }),
  );
}

export async function getPostByIdAsync(postId: number): Promise<Post> {
  const post = await common.getDataAsync<Post>(
    `https://dummyjson.com/posts/${postId}`,
  );
  return new Post(
    post.id,
    post.title,
    post.body,
    post.tags,
    post.reactions,
    post.views,
    post.userId,
  );
}
