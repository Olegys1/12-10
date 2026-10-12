import { useState } from 'react';
import styles from './LikeButton.module.css';

export default function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(42);

  const handleLike = () => {
    setLiked(!liked);
    setCount(prev => liked ? prev - 1 : prev + 1);
  };

  return (
    <button 
      className={`${styles.likeBtn} ${liked ? styles.liked : ''}`} 
      onClick={handleLike}
    >
      {liked ? '❤️' : '🤍'} {count}
    </button>
  );
}
