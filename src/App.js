import React from "react";

import Header from "./MyComponents/Header";

// import Footer from "./MyComponents/Footer";

import Terminal from "./MyComponents/Terminal";

import Homepage from "./MyComponents/Homepage";

import './styles.css'


function App() {
  return (
    <>
      <Header/>
      <Terminal/>
      <Homepage/>
    </>
  );
}

const theme = {
    global: {
      colors: {
      brand: '#121212',
    },
    font: {
      family: 'DM Mono',
      size: '18px',
      height: '20px',
    },
  },
};

export default App;