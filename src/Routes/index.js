import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home, Agents } from "../Pages";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agents" element={<Agents />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router