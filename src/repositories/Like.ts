export class Like {
  constructor(id: number, countOfLikes: number, countOfSubscript: number) {
    this.id = id
    this.countOfLikes = countOfLikes
    this.countOfSubscript = countOfSubscript
  }

  id: number
  countOfLikes: number
  countOfSubscript: number
}

export async function getLike(): Promise<Like> {
  //const response = await fetch('https://api.example.com/Like')
  //return (await response.json()) as Like
  return new Like(1, 5487, 5487)
}
