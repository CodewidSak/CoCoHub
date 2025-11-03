import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';

class WebSocketService {
  constructor() {
    this.stompClient = null;
    this.connected = false;
  }

  connect(onMessageReceived) {
    const socket = new SockJS('http://localhost:8080/ws');
    this.stompClient = Stomp.over(socket);

    const token = localStorage.getItem('accessToken');

    this.stompClient.connect(
      { Authorization: `Bearer ${token}` },
      () => {
        this.connected = true;
        console.log('WebSocket Connected!');

        // Subscribe to topics
        this.stompClient.subscribe('/topic/conflicts', (message) => {
          onMessageReceived('conflict', JSON.parse(message.body));
        });

        this.stompClient.subscribe('/user/queue/notifications', (message) => {
          onMessageReceived('notification', JSON.parse(message.body));
        });
      },
      (error) => {
        console.error('WebSocket Error:', error);
        this.connected = false;
      }
    );
  }

  disconnect() {
    if (this.stompClient && this.connected) {
      this.stompClient.disconnect();
      this.connected = false;
    }
  }

  sendMessage(destination, message) {
    if (this.stompClient && this.connected) {
      this.stompClient.send(destination, {}, JSON.stringify(message));
    }
  }
}

export default new WebSocketService();