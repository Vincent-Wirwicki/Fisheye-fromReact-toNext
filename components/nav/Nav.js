import UniqueTag from "./UniqueTag";
import Link from "next/link";
import style from "../../styles/Nav.module.css";
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

  return (
    <section className={style.container}>
      <Link href="/">
        <h1
          className={style.logo}
          onClick={() => {
            onRemove();
            setIsActive("");
          }}
        >
          Fisheye
        </h1>
      </Link>
      <div className={style.allTagsWrap}>
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
      {isFilter ? (
        <button onClick={setIsFilter(false)}>clear Filter</button>
      ) : (
        ""
      )}
    </section>
  );
};

export default Nav;
