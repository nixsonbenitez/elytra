import "./DestinationInput.css"

function DestinationInput({destination, setDestination}){
    return(
        <div className="destination-input">
            <span className="destination-icon">PIN</span>
            <input
            type="text"
            placeholder="Where should we take you?"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="destination-field"
            />
        </div>
    )
}