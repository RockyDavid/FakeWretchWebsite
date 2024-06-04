export class Message {
  constructor(id: number, name: string, message: string) {
    this.id = id;
    this.name = name;
    this.message = message;
  }
  id: number;
  name: string;
  message: string;
}

export async function getMessagesAsync(postId: number): Promise<Message[]> {
  return [
    new Message(1, "阿明", "你好啊！這裡真漂亮！"),
    new Message(2, "小美", "喜歡你的照片輪撥牆，真的很酷！"),
    new Message(3, "大強", "這個音樂播放器不錯，我也想要一個！"),
  ];
}
