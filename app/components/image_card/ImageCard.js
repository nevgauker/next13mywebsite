import "./ImageCard.module.css";

import styles from "./ImageCard.module.css";

import Image from "next/image";

function ImageCard(props) {
  const { img, width } = props;
  return (

    <Image
      className={styles.techImg}
      src={img}
      alt="tech"
      layout="cover"
    ></Image>

  
    
  );
}

export default ImageCard;
