import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BottomNav from "./components/BottomNav";
import Cart from "./components/Cart/Cart";
import AllTests from "./components/LabTest/AllTests";
import DetailsTest from "./components/LabTest/DetailsTest";
import ProductDetailPage from "./components/Products/ProductDetailPage";
import ProductPage from "./components/Products/ProductPage";
import Patient from "./components/Patient/Patient";
import Healthcare from "./screens/Healthcare"
import Home from "./screens/Home";
import LabTest from "./screens/LabTest";
import Login from "./screens/Login";
import Medicines from "./screens/Medicines";
import UploadPrescription from "./screens/UploadPrescription";
import HealthCheckPackages from "./components/AffordableHealthPackages/HealthCheckPackages";
// import Cart from "./components/Cart/Cart";
import CheckOut from "./components/PatientDetails/CheckOut";
import PatientDetails from "./components/PatientDetails/PatientDetails";
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
          <Route path="/labtest/testDetail/:name" >
            <DetailsTest />
          </Route>
          <Route path="/labtest">
            <LabTest />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/health-check-packages">
            <HealthCheckPackages />
          </Route>
          <Route path='/checkout'>
            <CheckOut />
          </Route>
          <Route to='/select-patient-details'>
            <PatientDetails />
          </Route>
          <Route path="/createPatient">
            <Patient />
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
