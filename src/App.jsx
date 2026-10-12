// src/App.jsx
import UserProfile from './components/UserProfile/UserProfile';
import PostList from './components/PostList/PostList';
import './App.css';

const mockUser = {
  name: "Oleg",
  bio: "Frontend Developer & UI/UX enthusiast. I love React, coffee, and traveling. Writing about modern technologies.",
  avatarUrl: "https://unsplash.com"
};

const mockPosts = [
  {
    id: 1,
    title: "React Components Basics",
    date: "October 10, 2026",
    text: "Components are the core of React. They allow you to split the UI into independent, reusable pieces that can be managed separately.",
    imageUrl: "https://unsplash.com"
  },
  {
    id: 2,
    title: "Why CSS Modules Are Awesome",
    date: "October 08, 2026",
    text: "CSS Modules solve the problem of global scope in styling. Every component gets its own isolated and unique namespace.",
    imageUrl: "https://unsplash.com"
  },
  {
    id: 3,
    title: "My First Day at Work",
    date: "October 05, 2026",
    text: "Started working on a huge new project today. Lots of challenges ahead, but the tech stack is absolutely amazing!",
    imageUrl: "https://unsplash.com"
  }
];

export default function App() {
  return (
    <div className="app-container">
      <aside className="sidebar">
        <UserProfile user={mockUser} />
      </aside>

      <main className="content-area">
        <h2 className="section-title">Publications</h2>
        <PostList posts={mockPosts} />
      </main>
    </div>
  );
}
