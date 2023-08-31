import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Sub01 } from "./pages/Sub01";
import { Sub02 } from "./pages/Sub02";
import { PageNotFound } from "./pages/PageNotFound";
import { Sub03 } from "./pages/Sub03";
import { Sub04 } from "./pages/Sub04";
import { HeaderEx } from "./components/HeaderEx";
import { Footer } from "./components/Footer";

export const Ex11 = () => {
  return (
    <BrowserRouter>
      <HeaderEx />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sub01" element={<Sub01 />} />
        <Route path="/Sub02" element={<Sub02 />} />
        <Route path="/Sub03" element={<Sub03 />} />
        <Route path="/Sub04" element={<Sub04 />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

// *react router dom
// =>리액트에서 경로를 이동할때 사용
// =>Router -> Routes -> Route
// =>Route는 path(경로) 와 element(컴포넌트)속성으로 구성
// =>HashRouter는 /#/으로 url에 입력해야되며,
// BrowserRouter는 일반적으로 경로 지정할때 사용하는 /(슬래시) 구성
