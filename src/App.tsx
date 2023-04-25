import { Route, Routes } from "react-router-dom";

import Layout from "./Components/Layout/Layout";

import Home from "./Components/Home/Home";
import Kviz from "./Components/Kviz/Kviz";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/kviz" element={<Kviz />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
