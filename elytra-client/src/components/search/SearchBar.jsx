import {useState} from "react";
import DestinationInput from "./DestinationInput"
import DateRangePicker from "./DateRangePicker"
import GuestSelector from "./GuestSelector"
import "./SearchBar.css"


function SearchBar(){
    const[destination, setDestination] = useState("");
    const[dates, setDates] = useState ({departure: "", return: ""});
    const[guests, setGuests] = useState(1);


function handleSearch(){
    console.log("Search for:", {destination, dates, guests});
}

return(
    <div className="search-bar">
    <DestinationInput
        destination={destination}
        setDestination={setDestination}
    />

    <DateRangePicker
    dates={dates}
    setDates={setDates}
    />

    <GuestSelector
        guests={guests}
        setGuests={setGuests}
    />

    <button className="search-button" onClick={handleSearch}>🔍</button>
    </div>
    );
}

export default SearchBar;