export interface Message {
  content: string;
  time: string;
  isSender: boolean;
}

export interface ChatPreview {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  lastMessageTime: string;
}

export interface Chat extends ChatPreview {
  online: boolean;
  messages: Message[];
}