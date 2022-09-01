import { useState } from "react";
import { AiOutlineShoppingCart, AiFillHeart } from "react-icons/ai";
import { useCart } from '../../context/useCart';

import Cart from "../../components/Cart";

import "./Navbar.css";

const Navbar = ({ onSearch }) => {
    const [search, setSearch] = useState("");
    const { toggleVisibility, movies } = useCart();

    const handleSearch = (event) => {
        const value = event.target.value;

        setSearch(value);
        onSearch?.(value);
    }

    return (
        <nav>
            <div className="brand-logo">
                <img src="" alt="logo da empresa" />
            </div>
            <div className="search">       
                <input type="search" onChange={handleSearch} value={search} placeholder="Pesquisa" />
                <button type="submit">Search</button>
            </div>
            <div className="actions">
                <button><AiFillHeart /></button>
                <div className="button">
                    {movies.length > 0 && <span>{movies.length}</span>}
                    <button onClick={toggleVisibility}><AiOutlineShoppingCart /></button>
                </div>
            </div>
            <Cart />
        </nav>
    )
}

export default Navbar
