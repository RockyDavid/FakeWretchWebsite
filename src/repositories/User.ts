export class User {
  constructor(id: number, imgUrl: string) {
    this.id = id;
    this.imgUrl = imgUrl;
  }

  id: number;
  imgUrl: string;
}
export async function getWhoComes9Async(): Promise<User[]> {
  //const response = await fetch('https://api.example.com/Like')
  //return (await response.json()) as Like
  return [
    new User(1, "/assets/images/noimg.webp"),
    new User(2, "/assets/images/noimg.webp"),
    new User(3, "/assets/images/noimg.webp"),
    new User(4, "/assets/images/noimg.webp"),
    new User(5, "/assets/images/noimg.webp"),
    new User(6, "/assets/images/noimg.webp"),
    new User(7, "/assets/images/noimg.webp"),
    new User(8, "/assets/images/noimg.webp"),
    new User(9, "/assets/images/noimg.webp"),
  ];
}
