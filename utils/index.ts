import firebase from 'firebase/app';
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);

async function initializeNotification(serviceWorkerRegistration: ServiceWorkerRegistration) {
  const message = firebase.messaging();
  const result = await Notification.requestPermission();
  if(result === 'denied' || result === 'default') {
    return '';
  } else {
    return await message.getToken({serviceWorkerRegistration});
  }
}

export default initializeNotification;
