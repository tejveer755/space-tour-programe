import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import data from "../data.json";

const Crew = () => {
  const crew = data.crew;
  const [crewNum, setCrewNum] = useState(0);

  // Deconstruct the crew object
  const { name, images, role, bio } = crew[crewNum];

  // Function to update localStorage when crewNum changes
  useEffect(() => {
    localStorage.setItem('activeCrewPage', JSON.stringify(crewNum));
  }, [crewNum]);

  // Function to retrieve crewNum from localStorage on component mount
  useEffect(() => {
    const storedCrewNum = localStorage.getItem('activeCrewPage');
    if (storedCrewNum !== null) {
      setCrewNum(JSON.parse(storedCrewNum));
    }
  }, []);

  // Function to handle swipe actions
  const handleSwipes = useSwipeable({
    onSwipedLeft: () => setCrewNum((crewNum + 1) % crew.length),
    onSwipedRight: () => setCrewNum((crewNum - 1 + crew.length) % crew.length)
  });

  return (
    <div className="crew" {...handleSwipes}>
      <h1><span>02</span> meet your crew</h1>
      <div className="content">
        <div className="crew-card">
          <h3>{role}</h3>
          <h2>{name}</h2>
          <p>{bio}</p>
        </div>
        <div className="crew-img">
          <img
            src={images.webp} // Adjust this to correctly access the image URL
            title={name}
            alt={name}
          />
        </div>
        <div className="btns">
          <div className={crewNum === 0 ? "active-btn" : "inActive"} onClick={() => setCrewNum(0)}></div>
          <div className={crewNum === 1 ? "active-btn" : "inActive"} onClick={() => setCrewNum(1)}></div>
          <div className={crewNum === 2 ? "active-btn" : "inActive"} onClick={() => setCrewNum(2)}></div>
          <div className={crewNum === 3 ? "active-btn" : "inActive"} onClick={() => setCrewNum(3)}></div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
