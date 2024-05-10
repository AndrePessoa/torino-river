import "./header.css";

export function Header() {
  return (
    <header>
      <img src="./imgs/mini-logo.svg" height={60} alt="Project logo" />
      <a href="#top">
        <h1>Fiume Po</h1>
      </a>
      <nav>
        <a href="#rules">Regole</a>
        <a href="#map">Mappa</a>
      </nav>
    </header>
  );
}
