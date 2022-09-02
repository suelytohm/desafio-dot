import { createContext, useContext, useState, useMemo } from 'react'
import { resolveImage } from '../utils/image'

const initialState = {
  movies: [],
  visible: false,
  totalPrice: 0,
  addMovie: () => {},
  removeMovie: () => {},
  toggleVisibility: () => {},
  removeAllMovies: () => {},
}

const CartContext = createContext(initialState)

export const CartProvider = ({ children }) => {
  const [movies, setMovies] = useState(initialState.movies)
  const [visible, setVisible] = useState(initialState.visible)

  const totalPrice = useMemo(() => {
    return movies.reduce((accumulator, movie) => {
      console.log({ movie, accumulator })
      const price = movie.amount * movie.price

      return accumulator + price
    }, 0)
  }, [movies])

  const movieExists = (movies, movie) => {
    return !!movies.some(m => m.id === movie.id)
  }

  const incrementMovieAmount = (movies, movie) => {
    return movies.map(m => {
      if (m.id === movie.id) return { ...m, amount: m.amount + 1 }
      return m
    })
  }

  const addMovie = movie => {
    setMovies(_movies => {
      if (movieExists(_movies, movie)) {
        return incrementMovieAmount(_movies, movie)
      }
      const theMovie = {
        id: movie.id,
        title: movie.title,
        price: 79,
        amount: 1,
        image: resolveImage(movie.poster_path),
      }
      return [..._movies, theMovie]
    })
  }

  const removeMovie = movie => {
    setMovies(_movies => {
      return _movies.filter(m => m.id !== movie.id)
    })
  }

  const removeAllMovies = () => {
    setVisible(false)
    setMovies([])
  }

  const toggleVisibility = () => {
    setVisible(_visible => !_visible)
  }

  return (
    <CartContext.Provider
      value={{
        movies,
        visible,
        totalPrice,
        addMovie,
        removeMovie,
        toggleVisibility,
        removeAllMovies,
      }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  return {
    movies: context.movies,
    visible: context.visible,
    totalPrice: context.totalPrice,
    addMovie: context.addMovie,
    removeMovie: context.removeMovie,
    toggleVisibility: context.toggleVisibility,
    removeAllMovies: context.removeAllMovies,
  }
}
