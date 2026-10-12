import PostCard from '../PostCard/PostCard';

export default function PostList({ posts }) {
  return (
    <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
      {posts.map(post => (
        <PostCard 
          key={post.id}
          title={post.title}
          date={post.date}
          text={post.text}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}
