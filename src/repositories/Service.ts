export class Service {
  constructor(id: number, title: string, link: string) {
    this.id = id
    this.title = title
    this.link = link
  }

  id: number
  title: string
  link: string
}
export async function getService(): Promise<Service[]> {
  //const response = await fetch('https://api.example.com/Like')
  //return (await response.json()) as Like
  return [new Service(1, '首頁', '/'), new Service(2, '活動', '/activities')]
}
