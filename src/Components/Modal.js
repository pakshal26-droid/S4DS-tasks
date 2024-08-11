import React from "react";
import "../Styles/modal.css";

function Modal({ recipe, onClose }) {
  const ingredient = recipe.ingredients;
  const instructions = recipe.instructions;
  return (
    <div className="modal-background">
      <div className="modal-container">
        <button className="close-modal-btn" onClick={onClose}>
          X
        </button>
        <h2>{recipe.name}</h2>
        <h2>Prep Time: {recipe.prepTimeMinutes} mins</h2>

        <div className="info-section">
          <div className="ingredients-section">
            <h2>Ingredients</h2>
            {ingredient.map((ing) => {
              return (
                <ul>
                  <li className="ingredients">
                    <p>{ing}</p>
                  </li>
                </ul>
              );
            })}
          </div>
          <div className="instructions-section">
            <h2>Instructions</h2>
            {instructions.map((instruction) => {
              return (
                <ul>
                  <li>
                    <p className="instruction">{instruction}</p>
                  </li>
                </ul>
              );
            })}
          </div>
          {/* Add more details as needed */}
        </div>
      </div>
    </div>
  );
}

export default Modal;
