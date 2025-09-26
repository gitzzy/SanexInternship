import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import EffectExp from "./components/EffectExp";
import FormsEx from "./components/FormsEx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import DynamicRouting from "./components/DynamicRouting";
import NavigateProg from "./components/NavigateProg";
import LocationInfo from "./components/LocationInfo";
import { Suspense, lazy } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  //Lazy Loading example
  const LazyLoading = lazy(() => import("./components/LazyLoading"));
  return (
    <>
      {/* <EffectExp/> */}
      <FormsEx name={name} setName={setName} />

      <BrowserRouter>
        <Home name={name} />
        <Routes>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/dynamic/:name" element={<DynamicRouting />}></Route>
          <Route path="/navi" element={<NavigateProg />}></Route>
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
          <Route path="/location" element={<LocationInfo />}></Route>
          <Route
            path="/lazy"
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
                <LazyLoading />
              </Suspense>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
