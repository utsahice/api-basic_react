import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './app.css'
function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPosts()
  }, [])

  const getPosts = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setPosts(res.data)
        console.log(res.data)
      })
      .catch((err) => console.error(err))
  }

  return (
    <div className='max-w-4xl mx-auto p-6 bg-white rounded-md shadow-md mt-10'>
      <h3 className='text-3xl font-bold mb-6 text-center text-blue-600'>
        Hello
      </h3>
      <ul className='space-y-6'>
        {posts.map((post) => (
          <li
            key={post.id}
            className='border border-gray-300 rounded-md p-4 hover:shadow-lg transition-shadow'
          >
            <p>
              <strong className='text-gray-700'>Name:</strong> {post.name}
            </p>
            <p>
              <strong className='text-gray-700'>Username:</strong>{' '}
              {post.username}
            </p>
            <p>
              <strong className='text-gray-700'>Email:</strong> {post.email}
            </p>
            <p>
              <strong className='text-gray-700'>Address:</strong>{' '}
              {post.address.street}, {post.address.city}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
