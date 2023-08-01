import { Route, Routes, useLocation } from "react-router-dom";
import {fetchCountriesInfo,getActivities} from "./redux/actions"
import { useEffect } from "react";
import { Home, Landing, Detail, Form } from "./views";
import { useDispatch } from "react-redux";
import NavBar from "./components/NavBar/NavBar";
import Activities from "./views/Activities/Activities";


function App() {
  const { pathname } = useLocation();
    const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(fetchCountriesInfo());
    dispatch(getActivities())
  }, [dispatch]);

  return (
    <div className="app">
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
