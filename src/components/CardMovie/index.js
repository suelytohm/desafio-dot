import React, { useMemo, useState } from 'react'
import "./CardMovie.css";
import { formatMoney } from "../../utils/format";

import { genres } from "../../assets/genres";

const CardMovie = ({ id, name, rating, genreId, value, imgBanner, releaseDate, onAdd }) => {

    const addItem = () => {
        onAdd?.();
    }

    const genreName = useMemo(() => {
        return genres.find(genre => genre.id === genreId).name || "Sem gênero";
    }, [genreId])

    const dateFormat = useMemo(() => {

        const theDate = new Date(releaseDate);

        const day = new Intl.DateTimeFormat("pt-BR", {day: "numeric"}).format(theDate);
        const month = new Intl.DateTimeFormat("pt-BR", {month: "long"}).format(theDate);
        const year = new Intl.DateTimeFormat("pt-BR", {year: "numeric"}).format(theDate);

        return `${day} de ${month.charAt(0).toUpperCase() + month.slice(1)}, ${year}`;

    }, [releaseDate])

    const img = "https://image.tmdb.org/t/p/w500" + imgBanner;

    return ( 
    <div className = "card">
        <div className = "banner">
            <img className = "img-banner"
            src = { img }
            alt = "banner do filme" />
            <span className = "release-date"> { dateFormat } </span>
        </div>
        <div className="title">
            <h3>
                <strong>{name} </strong>
            </h3>
        </div>
        <div className="container">
            <img className = "img-rating"
            src = "http://simpleicon.com/wp-content/uploads/star-256x256.png"
            alt = "rating" />
            <span>
                <strong> { rating } </strong>
            </span>
            <span> { genreName } </span> 
            </div>
            <div className = "price" >
            <p>{ formatMoney(value) }</p>
            </div>
            <div className = "add-item" >
                <button onClick = { addItem } > Adicionar </button>
            </div>
        </div>
    )
}

export default CardMovie