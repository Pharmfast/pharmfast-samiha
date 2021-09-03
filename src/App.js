import Login from "./screens/Login";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./screens/Home";
import Medicines from "./screens/Medicines";
import Healthcare from "./screens/Healthcare";
import LabTest from "./screens/LabTest";
import BottomNav from "./components/BottomNav";
import ProductPage from "./components/Products/ProductPage";
import ProductDetailPage from "./components/Products/ProductDetailPage";
import AllTests from "./components/LabTest/AllTests";
import UploadPrescription from "./screens/UploadPrescription";
import HealthPackages from "./components/AffordableHealthPackages/HealthPackages";
import HealthCheckPackages from "./components/AffordableHealthPackages/HealthCheckPackages";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/medicine">
            <Medicines />
          </Route>
          <Route path="/healthcare/product/:id">
            <ProductDetailPage />
          </Route>
          <Route path="/healthcare/product">
            <ProductPage />
          </Route>
          <Route path="/healthcare">
            <Healthcare />
          </Route>
          <Route path="/labtest/upload-prescription">
            <UploadPrescription />
          </Route>
          <Route path="/labtest/alltests">
            <AllTests />
          </Route>
          <Route path="/labtest">
            <LabTest />
          </Route>
          <Route path="/health-check-packages">
            <HealthCheckPackages />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
        <BottomNav />
      </Router>
    </div>
  );
}

export default App;
