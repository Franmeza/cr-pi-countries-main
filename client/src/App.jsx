import { Route, Routes, useLocation } from "react-router-dom";
import { Home, Landing, Detail, Form } from "./views";
import NavBar from "./components/NavBar/NavBar";
import Activities from "./views/Activities/Activities";
import './App.css';


function App() {    
  const { pathname } = useLocation();

  return (
    <div className="App">
      {pathname !== "/" && <NavBar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/activities" element={<Activities/>}/>
        <Route path="/create" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
