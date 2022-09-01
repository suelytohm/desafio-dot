import { useState } from "react";

import "./Navbar.css";

const Navbar = ({ onSearch }) => {
    const [search, setSearch] = useState("");

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
                <form>
                    <input type="search" onChange={handleSearch} value={search} placeholder="Pesquisa" />
                    <button type="submit">Search</button>
                </form>
            </div>
            
        </nav>
    )
}

export default Navbar
