import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible,setNotVisible }) => {
  
    //   const [isVisible, setIsVisible] = useState(false); //moving the state from child to closet common parent component
  
  


    return (
    <div className="section">
      <h1>{title}</h1>
      {isVisible ? (
        <button className="btn" onClick={() =>setNotVisible(false)}>
          hide
        </button>
      ) : (
        <button className="btn" onClick={() => setIsVisible(true)}>
          show
        </button>
      )}
      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Grocerymart = () => {
  const [visibleSection, setVisibleSection] = useState("none");
  return (
    <div className="grocery-mart">
      <Section
        title={"about"}
        description={
          "we are instant grocery delivery app powered by food villa, you can order any grocery item from any where we will delivery it in just 8 min we are the fastest in the industry"
        }
        isVisible={visibleSection === "about"}
        setIsVisible={() => setVisibleSection("about")}
        setNotVisible={() => setVisibleSection("none")}
      />
      <Section
        title={"team"}
        description={
          "we are the team of 50 engineer our aim or motto is to make this profile more ui friendly to the user so they can love it"
        }
        isVisible={visibleSection === "team"}
        setIsVisible={() => setVisibleSection("team")}
        setNotVisible={() => setVisibleSection("none")}
      />
    </div>
  );
};

export default Grocerymart;
