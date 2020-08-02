import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Cards from "./components/cards";
function App() {
  return (
    <React.Fragment>
      <Header />
      <div>
        <Sidebar />
      </div>
      <main>
        <div className="body">
          <h2>
            Dashboard <span>statistics and more</span>
          </h2>
          <label for="date">Filter by Date</label>
          <br />
          <input type="date" id="date" name="date"></input>
          <Cards />
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
