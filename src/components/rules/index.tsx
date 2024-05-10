import "./index.css";

export function Rules() {
  return (
    <section className="rules" id="rules">
      <div className="content">
        <div>
          <h2>PER LA NAVIGAZIONE A REMI SUL FIUME PO</h2>
        </div>
        <div className="col-2-2_1">
          <div>
            <p>
              Il nostro grande Fiume ospita vari tipi di imbarcazioni, e vuole
              che siano rispettate certe regole soprattutto perché nessuno si
              faccia male.
            </p>
            <p>
              In particolare le imbarcazioni da canottaggio, procedendo in
              direzione opposta allo sguardo dei vogatori, sono ad alto rischio
              di scontro. Pertanto è assolutamente obbligatorio per chiunque
              esca in barca, sia egli un atleta agonista oppure un neofita al
              suo battesimo del remo, rispettare le seguenti regole di
              direzione.
            </p>
            <p>
              a) in salita (da San Mauro verso Moncalieri) la sponda destra del
              fiume (lato collinare) se{" "}
              <span className="natanti-remi">natanti a remi</span>; la sponda
              sinistra del fiume (lato Borgo Medioevale) se natanti a{" "}
              <span className="natanti-canoa">pagaia, venete o pedalo</span>;
            </p>
            <p>
              b) in discesa (da Moncalieri verso San Mauro) la sponda sinistra
              del fiume (lato Borgo Medioevale) se{" "}
              <span className="natanti-remi">natanti a remi</span>; la sponda
              destra del Fiume (lato collinare) se{" "}
              <span className="natanti-canoa">
                natanti a pagaia, venete o pedalo
              </span>
              .
            </p>
          </div>
          <div>
            <img src="./imgs/sensi-di-marcha.svg" />
          </div>
        </div>
        <div>
          <p>
            Chi procede più lento deve lasciare spazio a chi va più veloce e
            avvertire a gran voce della propria presenza. Si ricordi che in
            gergo “andare a riva” significa accostare verso l’argine della
            propria mano da tenere, mentre “allargare” significa avvicinarsi al
            centro del fiume.
          </p>
          <p>
            Ogni ponte ha le sue particolari regole di direzione, ancora più
            importanti in quanto le arcate ed i piloni impediscono una completa
            visuale. In generale non bisogna maiinvertire la rotta se non si è
            ad almeno cento metri da qualsiasi ponte.
          </p>
          <p>
            Le regole precedenti sono frutto dell’esperienza e dell’accordo tra
            le Società remiere di Torino, e valgono per tutte le imbarcazioni da
            canottaggio. Le uniche occasioni in cui tali norme perdono in parte
            validità sono le manifestazioni ufficiali (gare) delle quali sono
            sempre avvisate tutte le Società.
          </p>
          <p>
            CHIUNQUE, NON RISPETTANDO LE REGOLE DI NAVIGAZIONE ELENCATE, E’
            CAUSA DI DANNO A PERSONE O COSE, SI DOVRA’ ASSUMERE IN PIENO LA
            RESPONSABILITA’ DELL’ACCADUTO.
          </p>
        </div>
      </div>
    </section>
  );
}
