import LikeButton from '../LikeButton/LikeButton';
import styles from './PostCard.module.css';

export default function PostCard({ title, date, text, imageUrl }) {
  return (
    <article className={styles.card}>
      {imageUrl && <img src={imageUrl} alt={title} className={styles.postImage} />}
      <div className={styles.content}>
        <span className={styles.date}>{date}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
        <div className={styles.footer}>
          <LikeButton />
        </div>
      </div>
    </article>
  );
}
