import Image from "next/image";
import styles from "../../styles/Profile.module.css";

const UserPhotos = ({ photos }) => {
  const { image } = photos;

  return image === undefined || image === null ? (
    ""
  ) : (
    <article className={styles.photoGridItem}>
      <span className={styles.imgWrap}>
        <Image
          src={`/img/${image}`}
          alt={image}
          width={300}
          height={300}
          size={50}
          objectFit={"contain"}
          layout={"responsive"}
          className={styles.imgWrap}
          priority
        />
      </span>
    </article>
  );
};

export default UserPhotos;
