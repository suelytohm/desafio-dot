import React from 'react'
import { useCart } from '../../context/useCart';
import { FaTrashAlt } from "react-icons/fa";
import { formatMoney } from "../../utils/format"

import "./Cart.css";

const Cart = () => {
    const { movies, visible, totalPrice, removeMovie } = useCart();

    console.log(movies);

    return (
        <div className={`cart ${!visible ? "hide" : ""}`}>
            <h2>Meu Carrinho</h2>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>{movie.title} - {movie.amount} - {formatMoney(movie.price)}
                        <button onClick={() => removeMovie(movie)}><FaTrashAlt /></button>
                    </li>
                ))}
            </ul>
            {movies.length === 0 && <p>Carrinho vazio</p>}
            <div className="footer">
                <p>Total: {formatMoney(totalPrice)}</p>
                <button>Finalizar Compra</button>
            </div>

        </div>
    )
}

export default Cart
