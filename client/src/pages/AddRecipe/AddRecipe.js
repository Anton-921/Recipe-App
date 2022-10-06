import React, { useState } from "react";
import styles from "../AddRecipe/AddRecipe.module.css";
import { useNavigate } from "react-router-dom";

const AddRecipe = ({ setRecipes }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [time, setTime] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [directions, setDirections] = useState("");
  const [image, setImage] = useState("");
  let navigate = useNavigate();

  const handleAddRecipe = (e) => {
    e.preventDefault();
    const recipe = {
      name,
      type,
      time,
      difficulty,
      description,
      ingredients,
      directions,
      image,
    };
    // post request with recipe
    setRecipes((recipes) => {
      return [recipe, ...recipes]
    })

    navigate("/home");
  };
  const imgFilehandler = (e) => {
    if (e.target.files.length !== 0) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };
  console.log(image);

  return (
    <section className={styles.container}>
      <form action="" className={styles.form} onSubmit={handleAddRecipe}>
        <h1>Add Recipe</h1>
        <div className={styles["form-control"]}>
          <label htmlFor="recipe">Recipe Name</label>
          <input
            type="text"
            name="recipe"
            maxLength={30}
            id="recipe"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        <div className={styles["form-control"]}>
          <label htmlFor="type">Recipe Type</label>
          <select
            name="type"
            id="type"
            onChange={(e) => setType(e.target.value)}
            value={type}
          >
            <option>Choose Recipe Type</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="dessert">Dessert</option>
          </select>
        </div>

        <div className={styles["form-control"]}>
          <label htmlFor="time">Estimated Time</label>
          <select
            name="time"
            id="time"
            onChange={(e) => setTime(e.target.value)}
            value={time}
          >
            <option>Choose Estimate Time</option>
            <option value="15 min">15 Min</option>
            <option value="30 min">30 Min</option>
            <option value="45 min">45 Min</option>
            <option value="1 hr">1 Hr</option>
          </select>
        </div>

        <div className={styles["form-control"]}>
          <label htmlFor="difficulty">Difficulty</label>
          <select
            name="difficulty"
            id="difficulty"
            onChange={(e) => setDifficulty(e.target.value)}
            value={difficulty}
          >
            <option>Choose Difficulty</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <div className={styles["form-control"]}>
          <label htmlFor="difficulty">Recipe Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => imgFilehandler(e)}
          />
        </div>

        <div className={styles["form-control"]}>
          <label htmlFor="description">Short Description</label>
          <textarea
            name="description"
            id="description"
            cols="25"
            rows="1"
            maxLength={500}
            wrap="hard"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className={styles["form-control"]}>
          <label htmlFor="ingredients">Ingredients</label>
          <textarea
            name="ingredients"
            id="ingredients"
            cols="25"
            rows="3"
            maxLength={500}
            wrap="hard"
            placeholder="Ingredient 1, Ingredient 2, ..."
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          ></textarea>
        </div>

        <div className={styles["form-control"]}>
          <label htmlFor="directions">Directions</label>
          <textarea
            name="directions"
            id="directions"
            cols="25"
            rows="8"
            placeholder="Type directions in a new line,
            Direction 1
            Direction 2 
            ...
            "
            value={directions}
            onChange={(e) => setDirections(e.target.value)}
          ></textarea>
        </div>
        <div>
          <button className={`${styles.btn} ${styles["btn-main"]}`}>
            Add Recipe
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddRecipe;
