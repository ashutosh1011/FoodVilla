import React from "react";
import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Menu = () => {
  const dispatch = useDispatch();
  

  

  const { id } = useParams();
  const restaurant = useRestaurant(id);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="restaurant-menu">
      <h2>restaurant id :{id}</h2>
      <h2>{restaurant.name}</h2>
      <img
        className="restaurant-image"
        src={IMG_CDN_URL + restaurant.cloudinaryImageId}
        alt="restaurant image"
      />
      <h3>{restaurant.locality}</h3>
      <h3>{restaurant.avgRating} star</h3>
      <h4>{restaurant.city}</h4>
      <button className="btn">
        AddItem
      </button>
    </div>
  );
};

export default Menu;
