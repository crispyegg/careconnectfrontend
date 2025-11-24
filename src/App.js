import React, { createContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import Routing from "./Routing";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const Store = createContext();

const App = () => {
  const [token, settoken] = useState("");
  const [showLayout, setShowLayout] = useState(true);
  return (
    <Store.Provider value={{ token, settoken, showLayout, setShowLayout }}>
      {showLayout && <Header />}  
      <Routing />
      {showLayout && <Footer />}  
    </Store.Provider>
  );
};

export default App;
