import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from "./components/Title";
import Quoteboard from './components/Quoteboard';
import DogsList from './components/DogsList';
import DogsListContainer from './components/DogsListContainer';


function App() {
  return (
    <div className="App">
      <Title content="Kirsten's Weird Hybrid App"/>
      <DogsListContainer/>
      <main>

      </main>
      <div>
      {/* <Quoteboard/> */}
      </div>



    </div>
  );
}

export default App;
