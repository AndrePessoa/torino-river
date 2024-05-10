import { Header } from "./components/header";
import Map from "./components/map/index";
import "./App.css";
import { WaterLevel } from "./components/map/water-level";
import { WeatherPanel } from "./components/map/weather";
import { MarkerMobileProvider } from "./components/map/marker";
import { Rules } from "./components/rules";
import { Footer } from "./components/footer";
import { Metrology } from "./components/metrology";

function App() {
  return (
    <MarkerMobileProvider>
      <div className="App">
        <Header />
        <WaterLevel />
        <WeatherPanel />
        <div id="mobile-sidebar" />
        <main id="map">
          <Map />
          <Rules />
          <Metrology />
        </main>
        <Footer />
      </div>
    </MarkerMobileProvider>
  );
}

export default App;
