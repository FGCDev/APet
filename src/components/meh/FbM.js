
import FirebaseApp from "../services/fb";

class FirebaseMessaging {
  constructor(config = {}) {
    config = Object.assign({ handleMessage: () => {} }, config);
    this.messaging = new FirebaseApp().messaging();
    this.handleMessage = config.handleMessage ;
  }

  requirestPermission() {
    if (this.handleMessage) {
      this.messaging.onMessage(this.handleMessage);
    }

    return this.messaging
      .requestPermission()
      .then(() => this.messaging.getToken());
  }
}

FirebaseMessaging.defaultApp = undefined;

export default FirebaseMessaging;