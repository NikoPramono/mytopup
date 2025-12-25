import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Memaksa scroll ke posisi paling atas (0,0) secara instan
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;