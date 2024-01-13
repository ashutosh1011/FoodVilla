import React from "react";
import { useParams } from "react-router-dom";

const Menu = () => {
    const {id} = useParams();
  return (
    <div>
      <h1>Restaurant id:{id}</h1>
      <h2>Food Villa</h2>
    </div>
  );
};

export default Menu;
