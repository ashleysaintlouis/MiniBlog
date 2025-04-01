import React from 'react'
import styles from './Home.module.css'
import { Link, useNavigate } from 'react-router-dom'

//hooks
import { useState } from 'react'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'

// components
import PostDetail from '../../components/postDetail/PostDetail'


const Home = () => {
  const [query, setQuery] = useState("");
  const { documents: posts, loading} = useFetchDocuments("posts")

  const navigate = useNavigate();
  
  const handleSearchPosts = (e) => {
    e.preventDefault();

    if (query) {
      return navigate(`/search?q=${query}`);
    }

  }

  return (
    <div className={styles.home}>
      <h1>Veja os nossos posts mais recentes</h1>

      <form onSubmit={handleSearchPosts} className={styles.search_form}>
        <input 
        type="text" 
        placeholder='Ou busque por tags...'
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        />
        <button className='btn btn-dark'>Pesquisar</button>
      </form>

      <div>
        {loading && <p>Carregando...</p>}
        {posts && posts.map((post) => 
      
          <PostDetail key={post.id} post={post} />
        )}
        {posts && posts.length === 0 && (
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