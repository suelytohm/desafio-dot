import { useMemo, useState, useEffect } from 'react'
import CardMovie from '../../components/CardMovie'

import './Movies.css'

import { useFetch } from '../../hooks/useFetch'
import { useCart } from '../../context/useCart'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Layout } from '../../components/Layout'

const Movies = () => {
  const [search, setSearch] = useState('')
  const { addMovie } = useCart()
  const [parent] = useAutoAnimate()

  const url =
    // 'https://api.themoviedb.org/3/search/movie?api_key=2d01e95445f89f6e7aeb8534848b8c24&language=pt-BR&query=loucademia%20de%20pol%C3%ADcia&page=1&include_adult=false'
    'https://api.themoviedb.org/3/discover/movie?api_key=2d01e95445f89f6e7aeb8534848b8c24&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate'

  const { data: items, loading, error } = useFetch(url)

  // Filtragem dos filmes
  const filteredItems = useMemo(() => {
    return (
      items?.results.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase()),
      ) || []
    )
  }, [items, search])

  // Pesquisando filmes
  const handleSearch = value => {
    setSearch(value)
  }

  // Adicionando filmes ao carrinho
  const handleAddMovie = movie => {
    addMovie(movie)
  }

  useEffect(() => {
    document.title = 'Filmes'
  }, [])

  return (
    <Layout onSearch={handleSearch}>
      <div className="movies-page">
        <div className="movies">
          <div className="card-list" ref={parent}>
            {error && <p>{error}</p>}
            {loading && <p>Carregando...</p>}
            {filteredItems.map(item => (
              <CardMovie
                key={item.id}
                id={item.id}
                name={item.title}
                rating={item.vote_average.toFixed(2)}
                value={79.99}
                genreId={item.genre_ids[0]}
                releaseDate={item.release_date}
                imgBanner={item.poster_path}
                onAdd={() => handleAddMovie(item)}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Movies
