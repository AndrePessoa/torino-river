import React, { useEffect, useState } from "react";
import "./install-button.css";
import { CloudDownload } from "lucide-react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => void;
};

const InstallPWA = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] =
    useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const handler = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();

      setSupportsPWA(true);
      setPromptInstall(e);
    };

    window.addEventListener("beforeinstallprompt", handler as EventListener);
    window.addEventListener("appinstalled", () => {
      setSupportsPWA(false);
    });

    return () =>
      window.removeEventListener("transitionend", handler as EventListener);
  }, []);

  const onClick = (evt: React.MouseEvent) => {
    evt.preventDefault();
    if (!promptInstall) {
      return;
    }

    promptInstall.prompt();
  };

  if (!supportsPWA) {
    return null;
  }

  return (
    <button
      className="install-button"
      id="setup_button"
      aria-label="Install app"
      title="Install app"
      onClick={onClick}
    >
      <CloudDownload />
      <span>Install app</span>
    </button>
  );
};

export default InstallPWA;
