import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Menu1 } from "./pages/Menu1";
import { Menu2 } from "./pages/Menu2";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const Cy = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu1" element={<Menu1 />} />
        <Route path="/menu2" element={<Menu2 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
