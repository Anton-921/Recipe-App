import { useLocation } from "react-router-dom";
import styles from "../Recipe/Recipe.module.css";
import { AiFillHeart, AiOutlineClockCircle } from "react-icons/ai";
import { BsFillBarChartFill } from "react-icons/bs";

const Recipe = () => {
  const { state } = useLocation();
  const recipe = state.recipe;
  return (
    <>
      <section className={styles.container}>
        {/* Content Container */}
        <div className={styles.recipe}>
          {/* TITLE */}
          <div className={styles.title}>
            <h1>{recipe.name}</h1>
          </div>
          {/* IMAGE */}
          <div className={styles.image}>
            <img src={recipe.image} alt="" />
          </div>
          {/* CONTENT */}
          <div>
            <div className={styles.likes}>
              <AiFillHeart size={25} color="rgb(116, 184, 255)" />
              <span>{recipe.likeCount}</span>
            </div>

            <div className={styles.description}>
              <p>{recipe.description}</p>
            </div>

            <div className={styles.timer}>
              <div>
                <AiOutlineClockCircle color="#74B8FF" size={25} />
                <span>{recipe.time}</span>
              </div>

              <div>
                <BsFillBarChartFill color="#74B8FF" size={25} />
                <span>{recipe.difficulty}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Recipe;
