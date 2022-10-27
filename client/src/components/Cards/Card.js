import React from "react";
import styles from "../Cards/Cards.module.css";
import { AiOutlineClockCircle, AiFillFire } from "react-icons/ai";
import { BsFillBarChartFill } from "react-icons/bs";
import { useRecipes } from "../../context/RecipeProvider";

const Cards = ({ items }) => {
  const { recipes, setRecipes } = useRecipes();
  const handleRecipeLike = async (id) => {
    console.log(id);
    const response = await fetch(
      `http://localhost:8080/api/v1/recipes/likeRecipe/${id}`,
      {
        method: "POST",
        credentials: "include",
      }
    );
    const resJson = await response.json();
    if (response.status === 200) {
      const updatedRecipe = resJson.recipe;
      setRecipes(
        recipes.map((recipe) => {
          if (recipe._id === updatedRecipe._id) {
            return updatedRecipe;
          }
          return recipe;
        })
      );
    }
  };
  return (
    <div className={styles.cards}>
      {items.map((item) => (
        <div className={styles.card} key={item._id}>
          <div className={styles["card-heading"]}>
            <img src={item.image} alt="oatmeal" />
          </div>
          <div className={styles["card-body"]}>
            <div className={styles["card-title"]}>
              <h3>{item.name}</h3>
              <span>{item.type}</span>
            </div>
            <div className={styles["card-icons"]}>
              <ul>
                <li>
                  <AiOutlineClockCircle color="#74B8FF" size={25} />
                  <span>{item.time}</span>
                </li>
                <li>
                  <BsFillBarChartFill color="#74B8FF" size={25} />
                  <span>{item.difficulty}</span>
                </li>
                <li>
                  <AiFillFire
                    color="#74B8FF"
                    size={25}
                    onClick={() => handleRecipeLike(item._id)}
                    className={styles["icon-like"]}
                  />
                  <span>{item.likeCount}</span>
                </li>
              </ul>
            </div>
            <div className={styles["card-description"]}>
              <p>
                <span>Ingredients: </span>
                {item.description}
              </p>
            </div>
            <div className={styles["card-ingredients"]}>
              <p>
                <span>Ingredients: </span>
                {item.ingredients}
              </p>
            </div>

            <div className={styles.user}>
              <span>Created by: {item.user.username}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
