export const filerData = (allRestaurant, txt) => {
  return allRestaurant.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(txt.toLowerCase())
  );
};
