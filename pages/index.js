import PhotographersList from "../components/home/PhotographersList";
import Nav from "../components/nav/Nav";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Home({ photographers, media }) {
  const ogData = photographers;
  const [displayData, setDisplayData] = useState(photographers);

  const onFilterTag = e => {
    const tagValue = e.target.textContent.substring(1);
    const filter = ogData.filter(({ tags }) => tags.includes(tagValue));
    filter.length && setDisplayData(filter);
  };

  const removeFilterTag = () => setDisplayData(ogData);

  return (
    <div className={styles.container}>
      <Nav dataTags={media} onFilter={onFilterTag} onRemove={removeFilterTag} />
      <PhotographersList photographers={displayData} />
    </div>
  );
}

export const getStaticProps = async () => {
  const resM = await fetch(`http://localhost:3000/api/media`);
  const resP = await fetch(`http://localhost:3000/api/photographers`);
  const photographers = await resP.json();
  const media = await resM.json();
  return {
    props: {
      photographers,
      media,
    },
  };
};
