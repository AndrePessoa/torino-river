// Firebase Cloud Messaging Configuration File.
// Read more at https://firebase.google.com/docs/cloud-messaging/js/client && https://firebase.google.com/docs/cloud-messaging/js/receive

import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyA0l4NLCQ-4DO5Uvvr6ufSXCR11xmydcy8",
  authDomain: "fiumepo-705fb.firebaseapp.com",
  projectId: "fiumepo-705fb",
  storageBucket: "fiumepo-705fb.appspot.com",
  messagingSenderId: "745763682854",
  appId: "1:745763682854:web:011531e5bc16b320abc4e7",
  measurementId: "G-DXKBZS6X6V",
};

initializeApp(firebaseConfig);

const messaging = getMessaging();
const vapidKey =
  "BPurGiiu0nVkmN3xPi5CTa0_-lOYazVVNb77CqdEXaIG94srvRQn6rKSs_Ze5-zwI9p75lpns8gX9Mh_hKY8jWM";

export const requestForToken = () => {
  console.log("requestForToken", vapidKey);

  // The method getToken(): Promise<string> allows FCM to use the VAPID key credential
  // when sending message requests to different push services

  navigator.serviceWorker
    .register(process.env.PUBLIC_URL + "/firebase-messaging-sw.js")
    .then((registration) => {
      console.log("Service Worker registrado com sucesso:", registration);

      // Usa o registration para obter o token do FCM
      getToken(messaging, { vapidKey, serviceWorkerRegistration: registration }) //to authorize send requests to supported web push services
        .then((currentToken) => {
          if (currentToken) {
            console.log("current token for client: ", currentToken, messaging);

            if (
              localStorage.getItem("fcmToken") &&
              currentToken !== localStorage.getItem("fcmToken")
            ) {
              localStorage.setItem("fcmToken", currentToken);
            } else if (!localStorage.getItem("fcmToken")) {
              localStorage.setItem("fcmToken", currentToken);
            }
          } else {
            console.log(
              "No registration token available. Request permission to generate one."
            );
          }
        })
        .catch((err) => {
          console.log("An error occurred while retrieving token. ", err);
        });
    })
    .catch((error) => {
      console.error("Falha ao registrar o Service Worker:", error);
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("Message received. ", payload);

      resolve(payload);
    });
  });
