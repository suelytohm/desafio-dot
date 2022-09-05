import React from 'react'
import { Cart } from '../Cart'
import { Favorites } from '../Favorites'
import { Navbar } from '../Navbar'
import './Layout.css'

export const Layout = ({ children, onSearch }) => {
  return (
    <div className="layout">
      <Navbar onSearch={onSearch} />
      <Cart />
      <Favorites />
      <main className="content">{children}</main>
    </div>
  )
}
