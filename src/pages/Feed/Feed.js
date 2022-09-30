import React from "react";
import styles from "../Feed/Feed.module.css";
import Cards from "../../components/Cards/Card";

const Feed = () => {
  return (
    <section className={styles.container}>
      <h1>Recipes Feed</h1>
      <div className={styles.cards}>
        <Cards />
      </div>
    </section>
  );
};

export default Feed;
