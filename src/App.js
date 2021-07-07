import React from "react";

import Header from "./MyComponents/Header";
// import Footer from "./MyComponents/Footer";

import Homepage from "./MyComponents/Homepage";
import Sitara from "./MyComponents/MyPages/Sitara";
import QuickVM from "./MyComponents/MyPages/QuickVM";
// import Merchandise from "./MyComponents/MyPages/Merchandise";

import './styles.css'

import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";

function App() {
  return (
    <>

    <Router>
      
      <Header/>              {/* $About and $Contact */}

      <Switch>

        <Route path="/"           exact component={Homepage} />
        <Route path="/optimize"   exact component={Sitara} />
        <Route path="/quick-vm"   exact component={QuickVM} />
        {/* <Route path="/design"     exact component={Merchandise} /> */}
      
      </Switch>

    </Router>
    
    </>
  );
}


export default App;