import { Route, Routes, useLocation } from "react-router-dom";
import { Home, Landing, Detail, Form } from "./views";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {

  const {pathname} = useLocation()
  return (
    <>
       {pathname !== "/" && <NavBar />} 
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/create" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
