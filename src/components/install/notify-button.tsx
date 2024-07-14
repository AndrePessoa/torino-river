import React, { useEffect, useState } from "react";
import { onMessageListener, requestForToken } from "../../utils/firebase";
import "./notify-button.css";

function activeFirebaseNotification() {
  requestForToken();

  onMessageListener().then((payload) => {
    // TODO toast system
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
    if (!("Notification" in window)) {
      return;
    }

    if (Notification.permission === "granted") {
      activeFirebaseNotification();
      forceUpdate((i) => i + 1);
    } else if (Notification.permission !== "denied") {
      console.log("Requesting permission...");

      Notification.requestPermission().then((permission) => {
        console.log("permission", permission);

        // If the user accepts, let's connect to our server
        if (permission === "granted") {
          activeFirebaseNotification();
          forceUpdate((i) => i + 1);
        }
      });
    }
  };

  useEffect(() => {
    // If the user already accepted, let's connect to our server
    if ("Notification" in window && Notification.permission === "granted") {
      activeFirebaseNotification();
    }
  }, []);

  if (!("Notification" in window)) {
    return null;
  }

  return (
    <div
      className={`button ${
        Notification.permission === "granted" ? "disabled" : ""
      }`}
      id="setup_button"
      aria-label="Notification setup"
      title={getTitle(Notification.permission)}
      onClick={onClick}
      style={{ opacity: "Notification" in window ? 1 : 0.5 }}
    >
      {children?.(
        "Notification" in window ? Notification.permission : "denied"
      )}
    </div>
  );
};

export default NotifyButton;
