import Image from "next/image";
import styles from "../../styles/Profile.module.css";
import { useState } from "react";

const UserPhotos = ({ photos }) => {
  const { title, tags, likes, price, image } = photos;
  const [isPopUp, setIsPopUp] = useState(false);
  const [imgToPopUp, setImgToPopUp] = useState("");

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
          onClick={() => {
            setIsPopUp(true);
            setImgToPopUp(image);
          }}
          priority
        />
      </span>
      {isPopUp ? (
        <div className={styles.popUp}>
          <h1 onClick={setIsPopUp(false)}>close</h1>
          <span className={styles.popUpImg}>
            <Image
              src={`/img/${imgToPopUp}`}
              alt={imgToPopUp}
              width={500}
              height={500}
              size={80}
              objectFit={"contain"}
              layout={"responsive"}
              className={styles.popUpImg}
            />
          </span>
        </div>
      ) : (
        ""
      )}
    </article>
  );
};

export default UserPhotos;
