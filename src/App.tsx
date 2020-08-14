import React from "react";
import classes from "./App.module.scss";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className={classes.Container}>
      <Header />
      <div className={classes.Content}>
        <Sidebar />
        <main className={classes.HotelView}>Hotel View</main>
      </div>
    </div>
  );
}

export default App;
