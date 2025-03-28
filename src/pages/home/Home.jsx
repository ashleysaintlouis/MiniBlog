import React from 'react'
import styles from './Home.module.css'

//hooks
import { Link } from 'react-router-dom'
import { useState } from 'react'

// components


const Home = () => {
  const [query, setQuery] = useState("");
  const [posts] = useState([])

  const handleSearchPosts = (e) => {
    e.preventDefault();


  }

  return (
    <div className={styles.home}>
      <h1>Veja os nossos posts mais recentes</h1>

      <form onSubmit={handleSearchPosts}>
        <input 
        type="text" 
        placeholder='Ou busque por tags...'
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        />
        <button className='btn btn-dark'>Pesquisar</button>
      </form>

      <div>
        <h1>Posts...</h1>
        {!posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Não foram encontrado posts</p>
            <Link to="/posts/create">Criar primeiro post</Link>
          </div>
        )}
      </div>
    </div>

  )
}

export default Home