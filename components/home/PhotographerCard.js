import Link from "next/link";
import styles from "../../styles/Home.module.css";
import Image from "next/image";

const PhotographerCard = ({ photographer }) => {
  const { id, name, city, country, tags, tagline, price, portrait } =
    photographer;

  const displayTag = tags.map((tag, i) => (
    <span className={styles.tagItem} key={i}>
      #{tag}
    </span>
  ));

  return (
    <article className={styles.gridItem}>
      <span className={styles.imgWrap}>
        <Image
          src={`/img/${portrait}`}
          alt={portrait}
          width={300}
          height={300}
          size={50}
          objectFit={"fill"}
          layout={"responsive"}
          className={styles.imgWrap}
          priority
        />
      </span>
      <div>
        <Link href="/profile/[id]" as={`/profile/${id}`}>
          <h3 className={styles.name}>{name}</h3>
        </Link>
        {/* <p className={styles.price}>{price}€</p> */}
        <h4>{tagline}</h4>
        <div>
          <p className={styles.location}>
            {city} - {country}
          </p>
        </div>
        <p className={styles.tagsWrap}>{displayTag}</p>
      </div>
    </article>
  );
};

export default PhotographerCard;
