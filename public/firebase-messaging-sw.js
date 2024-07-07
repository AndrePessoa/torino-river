/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */

// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js"
);

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyA0l4NLCQ-4DO5Uvvr6ufSXCR11xmydcy8",
  authDomain: "fiumepo-705fb.firebaseapp.com",
  projectId: "fiumepo-705fb",
  storageBucket: "fiumepo-705fb.appspot.com",
  messagingSenderId: "745763682854",
  appId: "1:745763682854:web:011531e5bc16b320abc4e7",
  measurementId: "G-DXKBZS6X6V",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Received background message ", payload);
  // Customize notification here
  const notificationTitle =
    payload.notification.title || "Background Message Title";
  const notificationOptions = {
    body: payload.notification.body || "Background Message body.",
    icon: "./imgs/icon_48.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
