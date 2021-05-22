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


async function initializeNotification(serviceWorkerRegistration: ServiceWorkerRegistration) {
  firebase.initializeApp(firebaseConfig);

  const messaging = firebase.messaging();
  const token = await messaging.getToken({serviceWorkerRegistration});
  console.log("token", token);
  messaging.onMessage((payload) => console.log("onMessage", payload));
  return token;
}

export default initializeNotification;
