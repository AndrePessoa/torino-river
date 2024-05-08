import { Header } from "./components/header";
import Map from "./components/map";
import "./App.css";
import { WaterLevel } from "./components/water-level";

function App() {
  return (
    <div className="App">
      <Header />
      <WaterLevel />
      <div id="mobile-sidebar" />
      <main>
        <Map />
      </main>
    </div>
  );
}

export default App;
