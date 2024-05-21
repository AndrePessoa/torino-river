import { Provider } from "react-redux";
import { createHashRouter, RouterProvider, Outlet } from "react-router-dom";
import { PrismicProvider } from "@prismicio/react";
import { client } from "./data/prismic";
import { Header } from "./components/header";
import { MarkerMobileProvider } from "./components/map/marker";
import ScrollToAnchor from "./components/link-anchor";
import { Footer } from "./components/footer";
import { Home } from "./pages/home";
import { Clubs } from "./pages/clubs";
import { Bridges } from "./pages/bridges";
import { store } from "./store";
import "./App.css";

const HashRouter = createHashRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToAnchor />
        <div className="App">
          <Header />
          <div id="floating" />
          <div id="mobile-sidebar" />
          <main id="map">
            <Outlet />
          </main>
          <Footer />
        </div>
      </>
    ),
    children: [
      ...["/clubs/:club", "/clubs"].map((path) => ({
        path,
        Component: Clubs,
      })),
      ...["/bridges/:club", "/bridges"].map((path) => ({
        path,
        Component: Bridges,
      })),
      ...["/", "/*", "/home", "/home/*"].map((path) => ({
        path,
        Component: Home,
      })),
    ],
  },
]);

function App() {
  return (
    <PrismicProvider client={client}>
      <Provider store={store}>
        <MarkerMobileProvider>
          <RouterProvider router={HashRouter} />
        </MarkerMobileProvider>
      </Provider>
    </PrismicProvider>
  );
}

export default App;
