import { Bell, BellOff, BellRing } from "lucide-react";
import NotifyButton from "../install/notify-button";
import { Hidrometry } from "./hidrometry";
import { Meteology } from "./meteology";

export function Metrology() {
  return (
    <section className="metrology">
      <div className="content">
        <h2>
          METEO E IDROMETRI{" "}
          <NotifyButton>
            {(permission: NotificationPermission) => (
              <>
                {permission === "default" ? (
                  <Bell strokeWidth={1} size={18} />
                ) : null}
                {permission === "granted" ? (
                  <BellRing strokeWidth={1} size={18} />
                ) : null}
                {permission === "denied" ? (
                  <BellOff strokeWidth={1} size={18} />
                ) : null}
              </>
            )}
          </NotifyButton>
        </h2>
        <Hidrometry />
        <Meteology />
      </div>
    </section>
  );
}
