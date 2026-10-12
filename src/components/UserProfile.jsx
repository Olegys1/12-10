import styles from './UserProfile.module.css';

export default function UserProfile({ user }) {
  return (
    <div className={styles.profileCard}>
      <img src={user.avatarUrl} alt={user.name} className={styles.avatar} />
      <h2 className={styles.name}>{user.name}</h2>
      <p className={styles.bio}>{user.bio}</p>
    </div>
  );
}
