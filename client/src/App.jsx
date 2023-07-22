import { Route, Routes, useLocation } from "react-router-dom";
import { Home, Landing, Detail, Form } from "./views";
import NavBar from "./components/NavBar/NavBar";
import axios from "axios"
import "./App.css";
import { useEffect, useState } from "react";

function App() {

  const {pathname} = useLocation()
  const [countries, setCountries] = useState([])
  const [aux, setAux] = useState(false)

  useEffect(()=>{
    if(aux === false){

      axios.get('http://localhost:3001/countries')
      .then(({data}) => {
        setCountries(data)  
        setAux(true)
      })    
    }
  },[aux])

  console.log(countries);

  return (
    
    <div className="app">
       {pathname !== "/" && <NavBar />} 
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/create" element={<Form />} />
      </Routes>

    </div>
    
  );
}

export default App;
