import React from 'react';
// import React, { useState } from 'react';

function StockMovements() {
  // const [quantity, setQuantity] = useState(0);
  // const [movementType, setMovementType] = useState('Entry');
  // const [reason, setReason] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Envoyez les données au backend (via une requête HTTP) pour enregistrement
  //   const data = { quantity, movementType, reason };

  //   // Réinitialisez le formulaire après l'enregistrement
  //   setQuantity(0);
  //   setMovementType('Entry');
  //   setReason('');
  // };

  return (
    <div>
      <h2>Stock Movements</h2>
      {/* <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="quantity">
            Quantity:
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="movement_type">
            Movement Type:
            <select
              value={movementType}
              onChange={(e) => setMovementType(e.target.value)}
            >
              <option value="Entry">Entry</option>
              <option value="Sale">Sale</option>
              <option value="Loss">Loss</option>
              <option value="Gift">Gift</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="reason">
            Reason:
            <input
              type="text"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Add Movement</button>
      </form> */}
    </div>
  );
}

export default StockMovements;
