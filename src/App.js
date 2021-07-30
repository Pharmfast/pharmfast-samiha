import Login from "./screens/Login";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./screens/Home";
import Medicines from "./components/Medicines/Medicines";
import Healthcare from "./components/Healthcare";
import LabTest from "./components/LabTest";
import BottomNav from "./components/BottomNav";
import ProductPage from "./components/ProductPage";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/medicine">
            <Medicines/>
          </Route>
          <Route path="/healthcare">
            <Healthcare/>
          </Route>
          <Route path="/labtest">
            <LabTest/>
          </Route>
          <Route path="/product">
            <ProductPage/>
          </Route>
          <Route exact path="/">
            <Login/>
          </Route>
        </Switch>
        <BottomNav/>
      </Router>
    </div>
  );
}

export default App;
