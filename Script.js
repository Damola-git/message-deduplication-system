class MessageProcessor {
  constructor() {
    this.messageQueue = []; 
    this.timeWindow = 5; 
  }

  processMessage(message) {
    const { content, timestamp } = message;


    this.messageQueue = this.messageQueue.filter(
      msg => timestamp - msg.timestamp <= this.timeWindow
    );

 
    const isDuplicate = this.messageQueue.some(
      msg => msg.content === content
    );

    if (isDuplicate) {
      return "duplicate";
    }

    
    this.messageQueue.push({ content, timestamp });
    return content;
  }
}

const processor = new MessageProcessor();

const messages = [
  { id: 1, content: "Hello", timestamp: 1 },
  { id: 2, content: "Hello", timestamp: 3 },
  { id: 3, content: "Hi", timestamp: 6 },
  { id: 4, content: "Hello", timestamp: 7 },
  { id: 5, content: "Hi", timestamp: 8 }
];

messages.forEach(msg => {
  console.log(`Message: "${msg.content}" at ${msg.timestamp} -> ${processor.processMessage(msg)}`);
});
