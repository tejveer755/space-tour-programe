import React, { useState, useEffect } from "react";
import data from "../data.json";
import { useSwipeable } from "react-swipeable";

const Destinations = () => {
    const destinations = data.destinations;
    const [destinationNum, setDestinationNum] = useState(0);

    // Deconstruct the destinations object
    const { name, images, description, distance, travel } = destinations[destinationNum];

    // Function to update localStorage when destinationNum changes
    useEffect(() => {
        localStorage.setItem('activeDestinationPage', JSON.stringify(destinationNum));
    }, [destinationNum]);

    // Function to retrieve destinationNum from localStorage on component mount
    useEffect(() => {
        const storedDestinationNum = localStorage.getItem('activeDestinationPage');
        if (storedDestinationNum !== null) {
            setDestinationNum(JSON.parse(storedDestinationNum));
        }
    }, []);

    const handleSwipes = useSwipeable({
        onSwipedLeft: () => setDestinationNum((destinationNum + 1) % destinations.length),
        onSwipedRight: () => setDestinationNum((destinationNum - 1 + destinations.length) % destinations.length)
    });

    return (
        <div className="destination"  {...handleSwipes}>
            <h1><span>01</span> Pick your location</h1>

            <div className="content">
                <div className="destinationImg">
                    <img
                        src= {images.png} // Adjust this to correctly access the image URL
                        title={name}
                        alt={name}
                    />
                </div>
                <div className="destinationcard">
                    <div className="pageNav">
                        <ul>
                            <li className={destinationNum === 0 ? "active-page" : ""} onClick={() => setDestinationNum(0)}>Moon</li>
                            <li className={destinationNum === 1 ? "active-page" : ""} onClick={() => setDestinationNum(1)}>Mars</li>
                            <li className={destinationNum === 2 ? "active-page" : ""} onClick={() => setDestinationNum(2)}>Europa</li>
                            <li className={destinationNum === 3 ? "active-page" : ""} onClick={() => setDestinationNum(3)}>Titan</li>
                        </ul>
                    </div>
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <hr />
                    <div className="stats">
                        <div>
                            <span>AVG. DISTANCE</span>
                            <h3>{distance}</h3>
                        </div>
                        <div>
                            <span>EXT. TRAVEL TIME</span>
                            <h3>{travel}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destinations;
