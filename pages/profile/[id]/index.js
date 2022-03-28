import Nav from "../../../components/nav/Nav";
import UserInfo from "../../../components/profile/UserInfo";
import UserPhotos from "../../../components/profile/userPhotos";
import styles from "../../../styles/Profile.module.css";
import { useState } from "react";

const index = ({ photographer, media }) => {
  const { id } = photographer[0];
  const currentPhotos = media.filter(
    ({ photographerId }) => photographerId === id
  );

  let totalLikes = 0;
  const [displayMedia, setDisplayMedia] = useState(currentPhotos);

  const onFilterTag = e => {
    const tagValue = e.target.textContent.substring(1);
    const filter = currentPhotos.filter(({ tags }) => tags.includes(tagValue));
    filter.length && setDisplayMedia(filter);
  };
  const removeFilterTag = () => setDisplayMedia(currentPhotos);

  const calcLikes = () => {
    currentPhotos.map(({ likes }) => (totalLikes += likes));
  };
  calcLikes();

  return (
    <div className={styles.container}>
      <Nav
        dataTags={currentPhotos}
        onFilter={onFilterTag}
        onRemove={removeFilterTag}
      />
      <section>
        <UserInfo user={photographer[0]} likes={totalLikes} />
      </section>
      <section className={styles.userPhotoGrid}>
        {displayMedia.map((item, i) => (
          <UserPhotos photos={item} key={i} />
        ))}
      </section>
    </div>
  );
};

export const getStaticProps = async context => {
  const resM = await fetch(`http://localhost:3000/api/media`);
  const resP = await fetch(
    `http://localhost:3000/api/photographers/${context.params.id}`
  );
  const photographer = await resP.json();
  const media = await resM.json();
  return {
    props: {
      photographer,
      media,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:3000/api/photographers`);
  const photographers = await res.json();
  const ids = photographers.map(({ id }) => id);
  const paths = ids.map(id => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};

export default index;
