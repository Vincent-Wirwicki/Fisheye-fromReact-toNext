import styles from "../../styles/Profile.module.css";
import Image from "next/image";

const UserInfo = ({ user, likes }) => {
  const { name, city, country, tags, tagline, price, portrait } = user;

  const displayTag = tags.map((t, i) => (
    <span className={styles.tagItem} key={i}>
      #{t}
    </span>
  ));

  return (
    <article className={styles.userInfo}>
      <span className={styles.imgWrapProfile}>
        <Image
          src={`/img/${portrait}`}
          alt={portrait}
          width={300}
          height={300}
          size={100}
          objectFit={"fill"}
          layout={"responsive"}
          className={styles.imgWrapProfile}
        />
      </span>
      <div>
        <h3>{name}</h3>
        <p>
          {city} - {country}
        </p>
        <h4>{tagline}</h4>
        <p>
          {price}€/j - {likes} likes
        </p>
        <p>{displayTag}</p>
      </div>
    </article>
  );
};

export default UserInfo;
