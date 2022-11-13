import { useState } from "react"
import { Link } from "react-router-dom"
import useFetch from "./useFetch"

const Card = (props) => {
    const src = props.src
    const title = props.title
    const rate = props.rate
    const id = props.id
    const type = props.type

    return(
        <div className="card">
            <img src={src} alt="anime cover" />
            <div className="overlay">
                <Link to={`details/${type}/${id}`}>
                    <p className="title">{title}</p>
                    <p className="rate">{rate}/10</p>
                </Link>
            </div>
        </div>
    )
}

export default Card
