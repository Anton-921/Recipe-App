import React from "react";
import oatmeal from "../../oatmeal.jpg";
import styles from "../Feed/Feed.module.css";
import { AiOutlineClockCircle, AiFillFire } from "react-icons/ai";
import { BsFillBarChartFill } from "react-icons/bs";

const Feed = () => {
  return (
    <section className={styles.container}>
      <h1>Recipes Feed</h1>
      {/* Container For items */}
      <div className={styles.cards}>
        <div className={styles.card}>
          {/* Card Heading */}
          <div className={styles["card-heading"]}>
            <img src={oatmeal} alt="oatmeal" />
          </div>

          {/* Card Body */}
          <div className={styles["card-body"]}>
            <div className={styles["card-title"]}>
              {/* Card Title */}
              <h3>Chai Oatmeal</h3>

              {/* Card-Sub-title */}
              <span>Breakfast</span>
            </div>

            {/* Card Icons */}
            <div className={styles["card-icons"]}>
              <ul>
                <li>
                  <AiOutlineClockCircle color="#74B8FF" size={25} />
                  <span>15 Min</span>
                </li>
                <li>
                  <BsFillBarChartFill color="#74B8FF" size={25} />
                  <span>Beginner</span>
                </li>
                <li>
                  <AiFillFire color="#74B8FF" size={25} />
                  <span>742</span>
                </li>
              </ul>
            </div>

            {/* Card Description */}
            <div className={styles["card-description"]}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
                veniam quidem pariatur? Optio mollitia ullam nisi hic. Nostrum,
                ea vero!
              </p>
            </div>

            {/* Card Ingredients */}
            <div className={styles["card-ingredients"]}>
              <span>
                Ingredients: Milk, salt, coriander, cardamom, cinnamon,
                turmeric, honey, vanilla extract, regular oats, oat bran.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feed;
