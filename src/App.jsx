import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setPosts(res.data);
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <h3>Hello</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>Name:</strong> {post.name} <br />
            <strong>Username:</strong> {post.username} <br />
            <strong>Email:</strong> {post.email} <br />
            <strong>Address:</strong> {post.address.street}, {post.address.city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
