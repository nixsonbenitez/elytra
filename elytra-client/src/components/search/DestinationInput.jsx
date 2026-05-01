import "./DestinationInput.css";

function DestinationInput({destination, setDestination}){
    return(
        <div className="destination-input">
            <img src="/pin.png" alt="location pin" className="destination-icon" />
            <input
            type="text"
            placeholder="Where should we take you?"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="destination-field"
            />
        </div>
    );
}

export default DestinationInput;