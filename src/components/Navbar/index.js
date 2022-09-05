import { useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { IoIosCart } from 'react-icons/io'
import { useCart } from '../../context/useCart'
import { useFavorites } from '../../context/useFavorites'

import logo from '../../assets/images/logo.png'

import './Navbar.css'

import { useAutoAnimate } from '@formkit/auto-animate/react'

export const Navbar = ({ onSearch }) => {
  const [search, setSearch] = useState('')
  const {
    toggleVisibility: toggleVisibilityCart,
    movies,
    visible: isCartVisible,
  } = useCart()
  const {
    toggleVisibility: toggleVisibilityFavorite,
    visible: isFavoriteVisible,
  } = useFavorites()

  const [parent] = useAutoAnimate()
  const handleSearch = event => {
    const value = event.target.value
    setSearch(value)
    onSearch?.(value)
  }

  const handleToggleFavoriteVisibility = () => {
    if (isCartVisible) {
      toggleVisibilityCart()
      setTimeout(toggleVisibilityFavorite, 700)
    } else {
      toggleVisibilityFavorite()
    }
  }

  const handleToggleCartVisibility = () => {
    if (isFavoriteVisible) {
      toggleVisibilityFavorite()
      setTimeout(toggleVisibilityCart, 700)
    } else {
      toggleVisibilityCart()
    }
  }

  return (
    <nav>
      <div className="brand">
        {/* <span>LOGO</span> */}
        <img src={logo} alt="" />
      </div>
      <div className="search">
        <input
          type="search"
          onChange={handleSearch}
          value={search}
          placeholder="Pesquisa"
        />
        <button className="search-button">Search</button>
      </div>
      <div className="actions">
        <button onClick={handleToggleFavoriteVisibility}>
          <AiFillHeart color="#fff" size={25} />
        </button>
        <div
          className="button"
          ref={parent}
          onClick={handleToggleCartVisibility}>
          {movies.length > 0 && <span>{movies.length}</span>}
          <button>
            <IoIosCart color="#fff" size={25} />
          </button>
        </div>
      </div>
    </nav>
  )
}
