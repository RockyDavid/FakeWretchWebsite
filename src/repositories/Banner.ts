export class Banner {
  constructor(id: number, title: string, description: string) {
    this.id = id;
    this.title = title;
    this.description = description;
  }

  id: number;
  title: string;
  description: string;
}
export async function getBannerAsync(): Promise<Banner> {
  //const response = await fetch('https://api.example.com/Like')
  //return (await response.json()) as Like
  return new Banner(1, "阿哲の領地", "歡迎來到阿哲領地");
}
