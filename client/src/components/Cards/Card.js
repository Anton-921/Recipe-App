import React from "react";
import styles from "../Cards/Cards.module.css";
import { AiOutlineClockCircle, AiFillFire } from "react-icons/ai";
import { BsFillBarChartFill } from "react-icons/bs";


const Cards = ({items}) => {
  return (
    <div className={styles.cards}>
      {items.map((item) => (
        <div className={styles.card} key={item.id}>
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
                  <AiFillFire color="#74B8FF" size={25} />
                  <span>{item.likes}</span>
                </li>
              </ul>
            </div>
            <div className={styles["card-description"]}>
              <p>{item.description}</p>
            </div>
            <div className={styles["card-ingredients"]}>
              <span>{item.ingredients}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
