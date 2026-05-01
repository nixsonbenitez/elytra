import "./GuestSelector.css"

function GuestSelector({guests, setGuests}){
    function handleDecrease(){
        if( guests > 1) setGuests(guests - 1);
    }
    function handleIncrease(){
        if(guests <9) setGuests(guests + 1);
    }

    return(
        <div className="guest-selector">
            <img src="/guests.png" alt="guests" className="guest-icon"/>
        <div className="guest-controls">
            <button className="guest-btn" onClick={handleDecrease}>-</button>
            <span className="guest-count">{guests}</span>
            <button className="guest-btn" onClick={handleIncrease}>+</button>
        </div>
    </div>
    )
}

export default GuestSelector;
