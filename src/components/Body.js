import React, { useEffect, useState } from "react";
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer.js";
import { filerData } from "../utils/Common.js";
import { Link } from "react-router-dom";

export const Body = () => {
  const [txt, setTxt] = useState("");
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await res.json();
      setFilteredRestaurant(
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setAllRestaurant(
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error(error);
    }
  };

  return allRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a restaurant..."
          className="search-input"
          value={txt}
          onChange={(e) => setTxt(e.target.value)}
        />
        <button
          onClick={() => {
            const data = filerData(allRestaurant, txt);
            setFilteredRestaurant(data);
          }}
        >
          search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurant.map((restaurant) => {
          return (
            <Link
            className="link"
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurantCard {...restaurant.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
