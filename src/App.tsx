import React from "react";
import classes from "./App.module.scss";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import HotelView from "./components/HotelView/HotelView";

function App() {
  return (
    <div className={classes.Container}>
      <Header />
      <div className={classes.Content}>
        <Sidebar />
        <main className={classes.HotelView}>
          <HotelView />
        </main>
      </div>
    </div>
  );
}

export default App;
