import React, { useEffect, useState } from "react";
import styles from "../Feed/Feed.module.css";
import Cards from "../../components/Cards/Card";

const Feed = ({ recipes }) => {
  return (
    <section className={styles.container}>
      <div className={styles.feed}>
        <h1>Recipes Feed</h1>
        <Cards recipes={recipes} />
      </div>
    </section>
  );
};

export default Feed;
