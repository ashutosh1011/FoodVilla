import React from "react";

const Shimmer = () => {
  return (
    <div className="restaurant-list">
      {Array(12)
        .fill("")
        .map((item, index) => {
          return <div className="shimmer" key={index}></div>;
        })}
    </div>
  );
};

export default Shimmer;
