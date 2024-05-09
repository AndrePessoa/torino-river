import { Header } from "./components/header";
import Map from "./components/map";
import "./App.css";
import { WaterLevel } from "./components/water-level";
import { WeatherPanel } from "./components/weather";
import { MarkerMobileProvider } from "./components/marker";

function App() {
  return (
    <MarkerMobileProvider>
      <div className="App">
        <Header />
        <WaterLevel />
        <WeatherPanel />
        <div id="mobile-sidebar" />
        <main>
          <Map />
        </main>
      </div>
    </MarkerMobileProvider>
  );
}

export default App;
