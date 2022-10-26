import React, { useRef } from "react";
import styles from "../AddRecipe/AddRecipe.module.css";
import { useNavigate } from "react-router-dom";
import { useRecipes } from "../../context/RecipeProvider";

const AddRecipe = () => {
  const { recipes, setRecipes } = useRecipes();
  let navigate = useNavigate();
  const form = useRef(null);

  const handleAddRecipe = async (e) => {
    e.preventDefault();
    const recipeData = new FormData(form.current);
    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/recipes/postRecipe",
        {
          credentials: "include",
          method: "POST",
          body: recipeData,
        }
      );
      const resJson = await response.json();
      if (response.status === 200) {
        setRecipes([resJson.recipe, ...recipes]);
        navigate("/home");
      } else {
        console.log("Set some state error message");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className={styles.container}>
      <form
        className={styles.form}
        onSubmit={handleAddRecipe}
        ref={form}
        encType="multipart/form-data"
      >
        <h1>Add Recipe</h1>
        <div className={styles["form-control"]}>
          <label htmlFor="recipe">Recipe Name</label>
          <input
            type="text"
            required
            name="recipeName"
            maxLength={30}
            id="recipe"
          />
        </div>

        <div className={styles["form-control"]}>
          <label htmlFor="type">Recipe Type</label>
          <select name="recipeType" id="type">
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="dessert">Dessert</option>
          </select>
        </div>

        <div className={styles["form-control"]}>
          <label htmlFor="time">Estimated Time</label>
          <select name="estimatedTime" id="time">
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
          <label htmlFor="image">Recipe Image</label>
          <input type="file" required accept="image/*" name="imageFile" />
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
