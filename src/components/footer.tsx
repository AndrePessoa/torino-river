import "./footer.css";

export function Footer() {
  return (
    <footer>
      <div className="content">
        <div>
          <img src="./imgs/large-logo.svg" height={60} alt="Project logo" />
        </div>
        <div>
          <p>
            Questo progetto utilizza i dati di{" "}
            <a
              href="https://www.amicidelfiume.it/"
              target="_blank"
              rel="noreferrer"
            >
              Amici del Fiume
            </a>
            ,{" "}
            <a
              href="https://www.arpa.piemonte.it/"
              target="_blank"
              rel="noreferrer"
            >
              Arpa Piemonte
            </a>{" "}
            e{" "}
            <a href="https://open-meteo.com/" target="_blank" rel="noreferrer">
              Open-Meteo
            </a>
            .
          </p>
          <p>
            Il suo obiettivo è fornire informazioni utili ad ogni atleta che
            naviga sul Po in tutta sicurezza.
          </p>
          <p>
            Created by{" "}
            <a href="http://apessoa.com" target="_blank" rel="noreferrer">
              apessoa.com
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
