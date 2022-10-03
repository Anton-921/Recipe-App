import React from "react";
import styles from "../Cards/Cards.module.css";
import oatmeal from "../../oatmeal.jpg";
import { AiOutlineClockCircle, AiFillFire } from "react-icons/ai";
import { BsFillBarChartFill } from "react-icons/bs";

const items = [
  {
    id: 1,
    image: oatmeal,
    recipeTitle: "Chai Oatmeal",
    recipeType: "Breakfast",
    estimatedTime: "15 Min",
    difficulty: "Beginner",
    likes: "742",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error veniam quidem pariatur? Optio mollitia ullam nisi hic. Nostrum, ea vero!",
    ingredients:
      "Ingredients: Milk, salt, coriander, cardamom, cinnamon, turmeric, honey, vanilla extract, regular oats, oat bran.",
  },
  {
    id: 2,
    image: oatmeal,
    recipeTitle: "Chai Oatmeal",
    recipeType: "Breakfast",
    estimatedTime: "15 Min",
    difficulty: "Beginner",
    likes: "742",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error veniam quidem pariatur? Optio mollitia ullam nisi hic. Nostrum, ea vero!",
    ingredients:
      "Ingredients: Milk, salt, coriander, cardamom, cinnamon, turmeric, honey, vanilla extract, regular oats, oat bran.",
  },

  {
    id:3,
    image: oatmeal,
    recipeTitle: "Chai Oatmeal",
    recipeType: "Breakfast",
    estimatedTime: "15 Min",
    difficulty: "Beginner",
    likes: "742",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error veniam quidem pariatur? Optio mollitia ullam nisi hic. Nostrum, ea vero!",
    ingredients:
      "Ingredients: Milk, salt, coriander, cardamom, cinnamon, turmeric, honey, vanilla extract, regular oats, oat bran.",
  },
  {
    id:4,
    image: oatmeal,
    recipeTitle: "Chai Oatmeal",
    recipeType: "Breakfast",
    estimatedTime: "15 Min",
    difficulty: "Beginner",
    likes: "742",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error veniam quidem pariatur? Optio mollitia ullam nisi hic. Nostrum, ea vero!",
    ingredients:
      "Ingredients: Milk, salt, coriander, cardamom, cinnamon, turmeric, honey, vanilla extract, regular oats, oat bran.",
  },
  {
    id:5,
    image: oatmeal,
    recipeTitle: "Chai Oatmeal",
    recipeType: "Breakfast",
    estimatedTime: "15 Min",
    difficulty: "Beginner",
    likes: "742",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error veniam quidem pariatur? Optio mollitia ullam nisi hic. Nostrum, ea vero!",
    ingredients:
      "Ingredients: Milk, salt, coriander, cardamom, cinnamon, turmeric, honey, vanilla extract, regular oats, oat bran.",
  },
  {
    id:6,
    image: oatmeal,
    recipeTitle: "Chai Oatmeal",
    recipeType: "Breakfast",
    estimatedTime: "15 Min",
    difficulty: "Beginner",
    likes: "742",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error veniam quidem pariatur? Optio mollitia ullam nisi hic. Nostrum, ea vero!",
    ingredients:
      "Ingredients: Milk, salt, coriander, cardamom, cinnamon, turmeric, honey, vanilla extract, regular oats, oat bran.",
  },
  {
    id:7,
    image: oatmeal,
    recipeTitle: "Chai Oatmeal",
    recipeType: "Breakfast",
    estimatedTime: "15 Min",
    difficulty: "Beginner",
    likes: "742",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error veniam quidem pariatur? Optio mollitia ullam nisi hic. Nostrum, ea vero!",
    ingredients:
      "Ingredients: Milk, salt, coriander, cardamom, cinnamon, turmeric, honey, vanilla extract, regular oats, oat bran.",
  },
  {
    id:8,
    image: oatmeal,
    recipeTitle: "Chai Oatmeal",
    recipeType: "Breakfast",
    estimatedTime: "15 Min",
    difficulty: "Beginner",
    likes: "742",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error veniam quidem pariatur? Optio mollitia ullam nisi hic. Nostrum, ea vero!",
    ingredients:
      "Ingredients: Milk, salt, coriander, cardamom, cinnamon, turmeric, honey, vanilla extract, regular oats, oat bran.",
  },

];

const Cards = () => {
  return (
    <div className={styles.cards}>
      {items.map((item) => (
        <div className={styles.card} key={item.id}>
          <div className={styles["card-heading"]}>
            <img src={item.image} alt="oatmeal" />
          </div>
          <div className={styles["card-body"]}>
            <div className={styles["card-title"]}>
              <h3>{item.recipeTitle}</h3>
              <span>{item.recipeType}</span>
            </div>
            <div className={styles["card-icons"]}>
              <ul>
                <li>
                  <AiOutlineClockCircle color="#74B8FF" size={25} />
                  <span>{item.estimatedTime}</span>
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
