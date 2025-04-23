import React from "react";
import './App.css';
import './index.css';
import GridSquare  from "./components/GridSquare";  

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Tetris Redux</h1>
        <h2 className="App-subtitle">A Tetris game built with React and Redux</h2>
        </header>
        <GridSquare color="1" />

        </div>  
  ); 

}
export default App;