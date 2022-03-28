import PhotographerCard from "./PhotographerCard";
import styles from "../../styles/Home.module.css";

const PhotographersList = ({ photographers }) => {
  return (
    <section className={styles.grid}>
      {photographers.map((photographer, i) => (
        <PhotographerCard photographer={photographer} key={i} />
      ))}
    </section>
  );
};

export default PhotographersList;
