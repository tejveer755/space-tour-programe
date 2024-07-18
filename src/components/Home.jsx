import React from "react"
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

 const handleExplore = ()=>{navigate("./destination")}
    return (
        <div className="home-page">
            <article>
                <h2>SO, YOU WANT TO TRAVEL TO</h2>
                <h1>SPACE</h1>
                <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </article>

            <div className="explore">
                <button onClick={handleExplore}>Explore</button>
            </div>
        </div>
    )
};

export default Home;
