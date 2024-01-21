import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../config";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getMenu();
  }, []);

  const getMenu = async () => {
    try {
      const res = await fetch(
       FETCH_MENU_URL+id
      );
      const data = await res.json();
      console.log(data.data.cards[0].card.card.info);
      setRestaurant(data?.data?.cards[0]?.card?.card?.info);
    } catch (error) {
      console.error(error);
    }
  };


  return restaurant;
};

export default useRestaurant;
