import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Components/Home";
import Products from "./Components/Products";
import DemoScripts from "./Components/DemoScripts";
import Customers from "./Components/Customers";
import SalesTeam from "./Components/SalesTeam";
import Demos from "./Components/Demos";
import SideBar from "./Components/SideBar";
import UsersList from "./Components/UsersList";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <img
          src="https://helloar.io/images/logo-dark.svg"
          alt="website-logo"
          className="website-logo"
        />
        <Header />
        <div className="tabs-container">
          <SideBar />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/products" element={<Products />} />
              <Route exact path="/scripts" element={<DemoScripts />} />
              <Route exact path="/customers" element={<Customers />} />
              <Route exact path="/salesTeam" element={<SalesTeam />} />
              <Route exact path="/demos" element={<Demos />} />
              <Route exact path="/settings" element={<UsersList />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
