import React from "react";
import './App.css';
import Autocomplete from "./Autocomplete";
const App = () => {
  return (
    <div className="App">
      <div className="logo">
        <img alt="Google" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"/>
      </div>
      <Autocomplete
        options={[
          "Papaya",
          "Persimmon",
          "Paw Paw",
          "Prickly Pear",
          "Peach",
          "Pomegranate",
          "Pineapple"
        ]}
      />
    </div>
  );
};

export default App;