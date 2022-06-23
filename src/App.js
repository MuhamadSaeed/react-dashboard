import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/home/Home";
import List from "./pages/users/Users"
import Info from "./pages/info/Info"
import "./app.scss"
import { useState } from "react";
import Products from "./pages/products/Products";
import NewPro from "./pages/newPro/NewPro";
import NewUser from "./pages/newuser/NewUser";

function App() {
  let [dark, setDark] = useState(true)
  let [toggle, setToggle] = useState(false)
  
  return (
    <div className={dark? "App" : "App dark"}>
      <BrowserRouter>
      <Routes>
      <Route  path='/' >
            <Route index element={<Home dark={dark} setDark={setDark} toggle={toggle} setToggle={setToggle}/>} />
            <Route path='users'>
              <Route index element={<List dark={dark} setDark={setDark} toggle={toggle} setToggle={setToggle}/>} />
              <Route path=':userId' element={<Info dark={dark} setDark={setDark} toggle={toggle} setToggle={setToggle}/>} />
              <Route path='new' element={<NewUser dark={dark} setDark={setDark} toggle={toggle} setToggle={setToggle}/>} />
            </Route>
            <Route path='products'>
              <Route index element={<Products dark={dark} setDark={setDark} toggle={toggle} setToggle={setToggle}/>} />
              <Route path='new' element={<NewPro dark={dark} setDark={setDark} toggle={toggle} setToggle={setToggle}/>}/>
            </Route>
          </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
