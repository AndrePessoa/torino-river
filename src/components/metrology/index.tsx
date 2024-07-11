import { Hidrometry } from "./hidrometry";
import { Meteology } from "./meteology";

export function Metrology() {
  return (
    <section className="metrology">
      <div className="content">
        <h2>METEO E IDROMETRI</h2>
        <Hidrometry />
        <Meteology />
      </div>
    </section>
  );
}
