import React from "react";
import './App.css';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import DashBoard from './Components/DashBoard/dashBoard';

function App() {
  return (
    <div>
      <Header></Header>
      <DashBoard></DashBoard>
      <Footer></Footer>
     
    </div>
  );
}

export default App;
