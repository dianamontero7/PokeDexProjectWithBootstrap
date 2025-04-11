import Pokemon from "./Pokemon";
import Data from "./data.json";
import React from "react";
import "./App.css"; // Import the custom styles for HornedBeast
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Main(props) {
  let beasts = Data;

  let beastsHTML = beasts.map((beastData) => (
    <div key={beastData.id} className="custom-item">
      <Pokemon
        id={beastData.id}
        imageUrl={beastData.image_url}
        title={beastData.title}
        description={beastData.description}
      />
    </div>
  ));

  return <div className="custom-grid">{beastsHTML}</div>;
}

export default Main;
