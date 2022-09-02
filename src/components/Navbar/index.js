import { useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { IoIosCart } from 'react-icons/io'
import { useCart } from '../../context/useCart'

import logo from '../../assets/images/logo.png'

import './Navbar.css'

import { useAutoAnimate } from '@formkit/auto-animate/react'

export const Navbar = ({ onSearch }) => {
  const [search, setSearch] = useState('')
  const { toggleVisibility, movies } = useCart()

  const [parent] = useAutoAnimate()
  const handleSearch = event => {
    const value = event.target.value

    setSearch(value)
    onSearch?.(value)
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
        <button type="submit">Search</button>
      </div>
      <div className="actions">
        <button>
          <AiFillHeart color="#fff" size={25} />
        </button>
        <div className="button" ref={parent} onClick={toggleVisibility}>
          {movies.length > 0 && <span>{movies.length}</span>}
          <button>
            <IoIosCart color="#fff" size={25} />
          </button>
        </div>
      </div>
    </nav>
  )
}
