import React from 'react'
import { Cart } from '../Cart'
import { Navbar } from '../Navbar'
import './Layout.css'

export const Layout = ({ children, onSearch }) => {
  return (
    <div className="layout">
      <Navbar onSearch={onSearch} />
      <Cart />
      <main className="content">{children}</main>
    </div>
  )
}
