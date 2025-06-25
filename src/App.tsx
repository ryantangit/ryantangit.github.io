import { HashRouter, Routes, Route } from "react-router";

import Blogs from "./pages/Blogs/Blogs";
import Home from "./pages/Home/Home";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </HashRouter>
  );
}
