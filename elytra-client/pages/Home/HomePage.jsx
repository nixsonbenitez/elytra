import SearchBar from "../../src/components/search/SearchBar";
import "./HomePage.css"

function HomePage(){
    return (
        <div className="home-page">
            <div className="hero">
                <div className="hero-content">
                    <h1 className="hero-title"> Fly With Us!</h1>
                    < p className="hero-subtitle">Book that flight and make those memories</p>
                    <SearchBar/> 
                </div>
            </div>
        </div>
    )
}

export default HomePage;