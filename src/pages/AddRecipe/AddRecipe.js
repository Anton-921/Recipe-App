import React from "react";
import styles from "../AddRecipe/AddRecipe.module.css";

const AddRecipe = () => {
  return (
    <section className={styles.container}>
      <form action="" className={styles.form}>
        <h1>Add Recipe</h1>
        <div className={styles["form-control"]}>
          <label htmlFor="recipe">Recipe Name</label>
          <input type="text" name="recipe" id="recipe" />
        </div>

        <div className={styles["form-control"]}>
          <label htmlFor="type">Recipe Type</label>
          <select name="type" id="type">
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="dessert">Dessert</option>
          </select>
        </div>

        <div className={styles["form-control"]}>
          <label htmlFor="time">Estimated Time</label>
          <select name="time" id="time">
            <option value="15 min">15 Min</option>
            <option value="30 min">30 Min</option>
            <option value="45 min">45 Min</option>
            <option value="1 hr">1 Hr</option>
          </select>
        </div>

        <div className={styles["form-control"]}>
          <label htmlFor="difficulty">Difficulty</label>
          <select name="difficulty" id="difficulty">
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <div className={styles["form-control"]}>
          <label htmlFor="description">Short Description</label>
          <textarea
            name="description"
            id="description"
            cols="25"
            rows="5"
          ></textarea>
        </div>

        <div className={styles["form-control"]}>
          <label htmlFor="ingredients">Ingredients</label>
          <textarea
            name="ingredients"
            id="ingredients"
            cols="25"
            rows="4"
            placeholder="Ingredient 1, Ingredient 2, ..."
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
