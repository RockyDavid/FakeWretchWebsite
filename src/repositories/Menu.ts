export class Menu {
  constructor(id: number, title: String, link: String) {
    this.id = id;
    this.title = title;
    this.link = link;
  }

  id: number;
  title: String;
  link: String;
}

export async function getMenuAsync(): Promise<Menu[]> {
  //const response = await fetch('https://api.example.com/Like')
  //return (await response.json()) as Like
  return [new Menu(1, "首頁", "/"), new Menu(2, "活動", "/activities")];
}
