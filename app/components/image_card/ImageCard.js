import "./ImageCard.module.css";

import styles from "./ImageCard.module.css";

import Image from "next/image";

function ImageCard(props) {
  const { img, width } = props;
  return (
    <Image
      width={width > 768 ? 114 : 60}
      height={width > 768 ? 114 : 60}
      layout="fixed"
      className={styles.techImg}
      src={img}
      alt="tech"
    ></Image>
  );
}

export default ImageCard;
