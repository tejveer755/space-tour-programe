import React, { useEffect, useState } from "react"
import { useSwipeable } from "react-swipeable";
import data from "../data.json"

const Technology = () => {
  const technology = data.technology;
  const [technologyNum, setTechnologyNum] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const { name, images, description } = technology[technologyNum];

  // Function to update localStorage when technologyNum changes
  useEffect(() => {
    localStorage.setItem('activeTechnologyPage', JSON.stringify(technologyNum));
  }, [technologyNum]);

  // Function to retrieve technologyNum from localStorage on component mount
  useEffect(() => {
    const storedTechnologyPage = localStorage.getItem('activeTechnologyPage');
    if (storedTechnologyPage !== null) {
      setTechnologyNum(JSON.parse(storedTechnologyPage));
    }
  }, []);

  // Function to handle window resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSwipes = useSwipeable({
    onSwipedLeft: () => setTechnologyNum((technologyNum + 1) % technology.length),
    onSwipedRight: () => setTechnologyNum((technologyNum - 1 + technology.length) % technology.length)
  });

  return (
    <div className="technology"  {...handleSwipes}>
      <h1><span>03</span> SPACE LAUNCH 101</h1>
      <div className="content">
        <div className="tech-card">
          <div className="buttons">
            <div onClick={() => setTechnologyNum(0)} className={technologyNum === 0 ? "active-tech" : "inactive-tech"}>1</div>
            <div onClick={() => setTechnologyNum(1)} className={technologyNum === 1 ? "active-tech" : "inactive-tech"}>2</div>
            <div onClick={() => setTechnologyNum(2)} className={technologyNum === 2 ? "active-tech" : "inactive-tech"}>3</div>
          </div>
          <div className="description">
            <h3>THE TERMINOLOGY...</h3>
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        </div>
        <img src={windowWidth >= 1024 ? images.portrait : images.landscape} alt={name} />
      </div>
    </div>
  );
};

export default Technology;
