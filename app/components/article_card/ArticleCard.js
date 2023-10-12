import Card from "react-bootstrap/Card";

import styles from "./ArticleCard.module.css";

function ArticleCard({ title, subTitle ,link,text}) {
  return (
      <Card className={styles.articleCard }>
      <Card.Body>
              <Card.Title>{ title }</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{ subTitle }</Card.Subtitle>
              <Card.Text>{text}</Card.Text>
        <Card.Link href={link} className={styles.articleLink}>Continue reading</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ArticleCard;
