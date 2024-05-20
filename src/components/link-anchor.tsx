import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { pushHistory } from "../store/history/actions";

function pathToId(path: string | undefined): string {
  if (!path) {
    return "";
  }

  return path.replace(/^\//gi, "").replace(/\/|#/gi, "-");
}

function ScrollToAnchor(): null {
  const location = useLocation();
  const lastHash = useRef("");
  const navbarHeight = 174;

  useEffect(() => {
    if (location.pathname) {
      lastHash.current = pathToId(location.pathname);

      pushHistory(location.pathname);
    }

    const id = lastHash.current.length > 0 ? lastHash.current : "";

    if (id && document.getElementById(id) != null) {
      setTimeout(() => {
        const element = document.getElementById(lastHash.current);
        if (element) {
          const elementPosition =
            element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - navbarHeight,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  }, [location]);

  return null;
}

export default ScrollToAnchor;
