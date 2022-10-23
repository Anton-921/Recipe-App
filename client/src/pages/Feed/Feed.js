import React, { useEffect, useState } from "react";
import styles from "../Feed/Feed.module.css";
import Cards from "../../components/Cards/Card";
import { useRecipes } from "../../context/RecipeProvider";
import Spinner from "../../components/Spinner/Spinner";

const Feed = () => {
  const { recipes, setRecipes } = useRecipes();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      getRecipes();
    }, 1000);

    const getRecipes = () => {
      setIsLoading(true)
      fetch("http://localhost:8080/api/recipes")
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          setRecipes(data);
          setIsLoading(false)
        });
    };

    return () => clearTimeout(timer);
  }, [setRecipes]);

  return (
    <section className={styles.container}>
      <div className={styles.feed}>
        <h1>Recipes Feed</h1>
        {!isLoading ? <Cards items={recipes} /> : <Spinner />}
      </div>
    </section>
  );
};

export default Feed;
