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
          <Outlet />
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
        {
          path: "*",
          Component: Home,
        },
      ],
    },
  ],
  {
    basename: process.env.PUBLIC_URL,
  }
);

function App() {
  return (
    <Provider store={store}>
      <MarkerMobileProvider>
        {false && <ScrollToAnchor />}
        <div className="App">
          <Header />
          <div id="floating" />
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
