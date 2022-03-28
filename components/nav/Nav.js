import UniqueTag from "./UniqueTag";
import Link from "next/link";
import styles from "../../styles/Nav.module.css";
import { useState } from "react";

const Nav = ({ dataTags, onFilter, onRemove }) => {
  const allTags = [];
  const [isActive, setIsActive] = useState();
  const [isFilter, setIsFilter] = useState(false);

  const mergeTags = () => dataTags.map(({ tags }) => allTags.push(...tags));
  const filterUniqueTags = arr =>
    arr.filter((item, index) => arr.indexOf(item) === index);

  mergeTags();
  const uniqueTags = filterUniqueTags(allTags);

  const utils = () => {
    setIsFilter(false);
    setIsActive();
    onRemove();
  };

  return (
    <section className={styles.container}>
      <Link href="/">
        <h1 className={styles.logo} onClick={utils}>
          Fisheye
        </h1>
      </Link>
      <div className={styles.allTagsWrap}>
        {uniqueTags.map((uniqueTag, i) => (
          <UniqueTag
            uniqueTag={uniqueTag}
            key={i}
            current={isActive === uniqueTag}
            onClick={e => {
              setIsActive(uniqueTag);
              setIsFilter(true);
              onFilter(e);
            }}
          />
        ))}
      </div>
      {isFilter && (
        <button className={styles.btn} onClick={utils}>
          clear Filter
        </button>
      )}
    </section>
  );
};

export default Nav;
