import { Provider } from "react-redux";
import { createHashRouter, RouterProvider, Outlet } from "react-router-dom";
import { Header } from "./components/header";
import { MarkerMobileProvider } from "./components/map/marker";
import { Footer } from "./components/footer";
import { store } from "./store";
import { Home } from "./pages/home";
import { Clubs } from "./pages/clubs";
import "./App.css";
import ScrollToAnchor from "./components/link-anchor";
import { Bridges } from "./pages/bridges";

const HashRouter = createHashRouter(
  [
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
        ...["/", "*"].map((path) => ({
          path,
          Component: Home,
        })),
      ],
    },
  ],
  process.env.PUBLIC_URL
    ? {
        basename: process.env.PUBLIC_URL,
      }
    : {}
);

function App() {
  return (
    <Provider store={store}>
      <MarkerMobileProvider>
        <RouterProvider router={HashRouter} />
      </MarkerMobileProvider>
    </Provider>
  );
}

export default App;
