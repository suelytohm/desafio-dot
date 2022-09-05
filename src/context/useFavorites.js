import { createContext, useContext, useState } from 'react'
import { resolveImage } from '../utils/image'

const initialState = {
  movies: [],
  visible: false,
  toggleVisibility: () => {},
  toggleMovie: () => {},
  removeMovie: () => {},
  removeAllMovies: () => {},
  isMovieFavorite: () => {},
}

const FavoritesContext = createContext(initialState)

export const FavoritesProvider = ({ children }) => {
  const [visible, setVisible] = useState(initialState.visible)
  const [movies, setMovies] = useState(initialState.movies)

  const toggleVisibility = () => {
    setVisible(_visible => !_visible)
  }

  const movieExists = (movies, movie) => {
    return !!movies.some(m => m.id === movie.id)
  }

  const toggleMovie = movie => {
    setMovies(_movies => {
      if (movieExists(_movies, movie)) {
        return _movies.filter(m => m.id !== movie.id)
      }
      const theMovie = {
        id: movie.id,
        title: movie.title,
        price: 79,
        image: resolveImage(movie.poster_path),
        originalImage: movie.poster_path,
      }
      return [..._movies, theMovie]
    })
  }

  const removeMovie = movie => {
    setMovies(_movies => {
      return _movies.filter(m => m.id !== movie.id)
    })
  }

  const isMovieFavorite = movieId => {
    return movieExists(movies, { id: movieId })
  }

  const removeAllMovies = () => {
    setVisible(false)
    setMovies([])
  }

  return (
    <FavoritesContext.Provider
      value={{
        movies,
        visible,
        toggleVisibility,
        toggleMovie,
        removeMovie,
        removeAllMovies,
        isMovieFavorite,
      }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export const useFavorites = () => {
  const context = useContext(FavoritesContext)
  return {
    movies: context.movies,
    visible: context.visible,
    toggleVisibility: context.toggleVisibility,
    toggleMovie: context.toggleMovie,
    removeMovie: context.removeMovie,
    removeAllMovies: context.removeAllMovies,
    isMovieFavorite: context.isMovieFavorite,
  }
}
