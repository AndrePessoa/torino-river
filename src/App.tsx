import { Provider } from "react-redux";
import { Header } from "./components/header";
import Map from "./components/map/index";
import "./App.css";
import { WaterLevel } from "./components/map/water-level";
import { WeatherPanel } from "./components/map/weather";
import { MarkerMobileProvider } from "./components/map/marker";
import { Rules } from "./components/rules";
import { Footer } from "./components/footer";
import { Metrology } from "./components/metrology";
import { store } from "./store";

const totalDistance = 7450;

function App() {
  return (
    <Provider store={store}>
      <MarkerMobileProvider>
        <div className="App">
          <Header />
          <div className="floating-panels">
            <WaterLevel />
            <WeatherPanel />
          </div>
          <div id="mobile-sidebar" />
          <main id="map">
            <Map>{(distance) => <div>{distance * totalDistance}m</div>}</Map>
            <Rules />
            <Metrology />
          </main>
          <Footer />
        </div>
      </MarkerMobileProvider>
    </Provider>
  );
}

export default App;
