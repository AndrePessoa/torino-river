import React, { useEffect, useState } from "react";
import { onMessageListener, requestForToken } from "../../utils/firebase";

function activeFirebaseNotification() {
  requestForToken();

  console.log("App started with Firebase.");

  onMessageListener().then((payload) => {
    console.log("Message received. ", payload);
  });
}

function getTitle(permission: NotificationPermission) {
  if (permission === "default") {
    return "Active levels alerts";
  } else if (permission === "granted") {
    return "Alerts are active";
  } else if (permission === "denied") {
    return "Alerts are blocked";
  }
}

const NotifyButton = ({ children }: { children: any }) => {
  const [, forceUpdate] = useState(0);

  const onClick = () => {
    if (Notification.permission === "granted") {
      activeFirebaseNotification();
      forceUpdate((i) => i + 1);
    } else if (Notification.permission !== "denied") {
      console.log("Requesting permission...");

      Notification.requestPermission().then((permission) => {
        console.log("permission", permission);

        // If the user accepts, let's create a notification
        if (permission === "granted") {
          activeFirebaseNotification();
          forceUpdate((i) => i + 1);
        }
      });
    }
  };

  useEffect(() => {
    if (Notification.permission === "granted") {
      activeFirebaseNotification();
    }
  }, []);

  return (
    <div
      className="link-button"
      id="setup_button"
      aria-label="Notification setup"
      title={getTitle(Notification.permission)}
      onClick={onClick}
    >
      {children?.(Notification.permission)}
    </div>
  );
};

export default NotifyButton;
