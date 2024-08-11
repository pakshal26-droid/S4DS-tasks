import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../Styles/home.css";
import { IoMdStar } from "react-icons/io";
import Modal from "./Modal";

function Home() {
  const [recipe, setRecipe] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchType, setSearchType] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    Axios.get("https://dummyjson.com/recipes").then((res) => {
      setRecipe(res.data.recipes);
      console.log(res.data);
      // console.log(res.data);
    });
  }, []);
  const filteredRecipes = recipe.filter((re) => {
    return (
      re.name.toLowerCase().includes(searchName.toLowerCase()) &&
      re.cuisine.toLowerCase().includes(searchType.toLowerCase()) &&
      (selectedDifficulty === "" || re.difficulty === selectedDifficulty)
    );
  });

  return (
    <>
      <>
        <div className="home-container">
          <div className="sidebar">
            <h3>Filters</h3>
            <input
              type="text"
              placeholder="Search by name"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              className="search-input"
            />
            <input
              type="text"
              placeholder="Search by Cuisine"
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
              className="search-input"
            />

            <div className="difficulty-filter">
              <h4>Difficulty</h4>
              <label>
                <input
                  type="radio"
                  value=""
                  checked={selectedDifficulty === ""}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                />
                <span>All</span>
              </label>
              <label>
                <input
                  type="radio"
                  value="Easy"
                  checked={selectedDifficulty === "Easy"}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                />
                <span>Easy</span>
              </label>
              <label>
                <input
                  type="radio"
                  value="Medium"
                  checked={selectedDifficulty === "Medium"}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                />
                <span>Medium</span>
              </label>
            </div>
          </div>

          <div className="recipe-container">
            {filteredRecipes.length > 0 ? (
              filteredRecipes.map((re) => {
                return (
                  <React.Fragment key={re.id}>
                    <div className="card">
                      <img src={re.image} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">{re.name}</h5>
                      </div>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">{re.cuisine}</li>
                        <li className="list-group-item">{re.difficulty}</li>
                        <li className="list-group-item">
                          Calories: {re.caloriesPerServing} kcal
                          <br />
                          Rating: {re.rating} <IoMdStar className="star" />
                        </li>
                        <li className="list-group-item">
                          <button
                            type="button"
                            className="btn btn-primary openModalBtn "
                            onClick={() => {
                              setSelectedRecipe(re);
                            }}
                          >
                            Open
                          </button>
                        </li>
                      </ul>
                    </div>
                  </React.Fragment>
                );
              })
            ) : (
              <p>Getting recipes...</p>
            )}
          </div>
        </div>
        {selectedRecipe && (
          <Modal
            recipe={selectedRecipe}
            onClose={() => setSelectedRecipe(null)}
          />
        )}
      </>
    </>
  );
}

export default Home;
//   fetch("https://dummyjson.com/recipes")
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//
//     });
