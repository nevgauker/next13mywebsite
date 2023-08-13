import "./Social.module.css";

import styles from "./Social.module.css";

import Image from "next/image";

import linkedin from "../../../public/images/social/linkedin.png";
import github from "../../../public/images/social/github.png";
import stack from "../../../public/images/social/stack.png";
import medium from "../../../public/images/social/medium.png";
import email from "../../../public/images/social/email.png";

function Social() {
  const openLink = (link) => {
    window.open(link);
  };
  return (
    <div
      className={["btn-group", "btn-group-sm"]}
      role="group"
      aria-label="Social"
    >
      <button
        type="button"
        onClick={() =>
          openLink("https://www.linkedin.com/in/rotem-nevgauker-73622037/")
        }
        className={styles.btnSocial}
      >
        <Image className="img-fluid" src={linkedin} alt="linkedin"></Image>
      </button>
      <button
        type="button"
        onClick={() => openLink("https://github.com/nevgauker")}
        className={styles.btnSocial}
      >
        <Image className="img-fluid" src={github} alt="github"></Image>
      </button>
      <button
        type="button"
        onClick={() =>
          openLink("https://stackoverflow.com/users/3400918/nevgauker")
        }
        className={styles.btnSocial}
      >
        <Image src={stack} className="img-fluid" alt="stack overflow"></Image>
      </button>
      <button
        type="button"
        onClick={() => openLink("https://medium.com/@rotemnevgauker")}
        className={styles.btnSocial}
      >
        <Image src={medium} className="img-fluid" alt="medium"></Image>
      </button>
      <button
        type="button"
        onClick={() => openLink("/contact")}
        className={styles.btnSocial}
      >
        <Image src={email} className="img-fluid" alt="medium"></Image>
      </button>
    </div>
  );
}

export default Social;
