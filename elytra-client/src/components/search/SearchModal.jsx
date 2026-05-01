import { useState } from "react";
import "./SearchModal.css";

function SearchModal({ onClose, onSearch }) {
  const [destination, setDestination] = useState("");

  function handleConfirm() {
    onSearch(destination);
    onClose();
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <h2 className="modal-title">Where are you flying?</h2>

        <div className="modal-field">
          <label>Destination</label>
          <input
            type="text"
            placeholder="Search destinations..."
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="modal-input"
          />
        </div>

        <button className="modal-search-btn" onClick={handleConfirm}>
          Confirm Destination
        </button>
      </div>
    </div>
  );
}

export default SearchModal;