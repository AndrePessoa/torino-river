import { Provider } from "react-redux";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { Header } from "./components/header";
import { WaterLevel } from "./components/map/water-level";
import { WeatherPanel } from "./components/map/weather";
import { MarkerMobileProvider } from "./components/map/marker";
import { Footer } from "./components/footer";
import { store } from "./store";
import { Home } from "./pages/home";
import "./App.css";

const HashRouter = createHashRouter([
  {
    path: "/test",
    element: <div>Opa</div>,
  },
  {
    path: "*",
    element: <Home />,
  },
]);

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
            <RouterProvider router={HashRouter} />
          </main>
          <Footer />
        </div>
      </MarkerMobileProvider>
    </Provider>
  );
}

export default App;
