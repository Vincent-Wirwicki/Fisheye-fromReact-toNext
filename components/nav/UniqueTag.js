import styles from "../../styles/Nav.module.css";

const UniqueTag = ({ uniqueTag, current, onClick }) => {
  return (
    <div className={styles.tagWrap}>
      <button
        className={current ? styles.selected : styles.notSelected}
        onClick={e => {
          onClick(e);
        }}
      >
        #{uniqueTag}
      </button>
    </div>
  );
};

export default UniqueTag;
