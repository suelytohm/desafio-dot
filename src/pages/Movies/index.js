import { useMemo, useState, useEffect } from 'react'
import CardMovie from '../../components/CardMovie'

import './Movies.css'

import { useCart } from '../../context/useCart'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Layout } from '../../components/Layout'
import { useQuery } from '@tanstack/react-query'

const Movies = () => {
  const [search, setSearch] = useState('')
  const { addMovie } = useCart()
  const [parent] = useAutoAnimate()

  const urlMovies = `https://api.themoviedb.org/3/discover/movie?api_key=2d01e95445f89f6e7aeb8534848b8c24&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
  const urlMoviesSearch = `https://api.themoviedb.org/3/search/movie?api_key=2d01e95445f89f6e7aeb8534848b8c24&language=pt-BR&query=${search}&page=1&include_adult=false`

  const { isLoading, data, isFetching } = useQuery(
    ['getMovies'],
    async () => await fetch(urlMovies).then(response => response.json()),
  )

  const {
    isLoading: isLoadingSearch,
    data: dataSearch,
    isFetching: isFetchingSearch,
    fetchStatus: fetchStatusSearch,
  } = useQuery(
    ['searchMovies', search],
    async () => await fetch(urlMoviesSearch).then(response => response.json()),
    { enabled: search !== '' },
  )

  // Pesquisando filmes
  const handleSearch = value => {
    setSearch(value)
  }

  useEffect(() => {
    document.title = 'Filmes'
  }, [])

  const loadingMovies = useMemo(
    () => isLoading || isFetching,
    [isLoading, isFetching],
  )

  const loadingSearch = useMemo(
    () => (isLoadingSearch && fetchStatusSearch !== 'idle') || isFetchingSearch,
    [isLoadingSearch, isFetchingSearch, fetchStatusSearch],
  )

  const theData = useMemo(
    () => (search === '' ? data : dataSearch),
    [data, dataSearch, search],
  )

  return (
    <Layout onSearch={handleSearch}>
      <div className="movies-page">
        <div className="movies">
          <div className="card-list" ref={parent}>
            {/* {error && <p>{error}</p>} */}
            {(loadingMovies || loadingSearch) && <p>Carregando...</p>}
            {theData &&
              theData.results &&
              theData?.results.map(item => (
                <CardMovie
                  key={item.id}
                  id={item.id}
                  name={item.title}
                  rating={item.vote_average.toFixed(2)}
                  value={79.99}
                  genreId={item.genre_ids[0]}
                  releaseDate={item.release_date}
                  imgBanner={item.poster_path}
                  onAdd={() => addMovie(item)}
                />
              ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Movies
