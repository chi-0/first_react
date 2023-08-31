import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Sub01 } from "./pages/Sub01";
import { Sub02 } from "./pages/Sub02";
import { Header } from "./components/Header";
import { getByTitle } from "@testing-library/react";

export const Ex12 = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sub/:id" element={<Sub01 />} />
      </Routes>
    </BrowserRouter>
  );
};

// *git(기록)
// =>지정한 파일 및 폴더를 추적하여 각 파일,폴더의 변화된 부분을
// 기록하는 파일 관리 툴

// *git hub(저장소)
// =>git으로 관리된 파일을 업로드 하여 저장소에 저장 및 관리를 할수있는
// 개발자 플랫폼
