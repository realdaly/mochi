import { useParams } from "react-router-dom"
import useFetch from "./useFetch"

const DetailsPage = () => {
    const { type, id } = useParams()
    const { data:details } = useFetch(`https://api.jikan.moe/v4/${type}/${id}`)

    return(
        <div className="detailsPage">
            {details && (
                <div className="detailsWrapper">
                    <div className="img">
                        <img src={details.data.images.jpg.large_image_url} alt="Cover Image" />
                    </div>
                    <div className="details">

                        <div className="header">
                            <div className="titles">
                                <p className="title">{details.data.title_english}</p>
                                <p className="jTitle">{details.data.title_japanese}</p>
                            </div>
                            <div className="rating">
                                {details.data.score}
                            </div>
                        </div>

                        <div className="description">
                            {details.data.synopsis}
                        </div>

                        <div className="info">
                            <ul className="info1">
                                <li>Type: <span>{details.data.type}</span></li>
                                <li>Rating: <span>{details.data.rating}</span></li>
                                <li>Genre: <span>{details.data.genres[0].name}</span></li>
                                <li>Status: <span>{details.data.status}</span></li>
                            </ul>
                            <ul className="info2">
                                <li>Episodes: <span>{details.data.episodes}</span></li>
                                <li>Duration: <span>{details.data.duration}</span></li>
                                <li>Year: <span>{details.data.year}</span></li>
                                <li>Aired: <span>{details.data.aired ? details.data.aired.string : ""}</span></li>
                            </ul>
                        </div>

                        <a href={details.data.trailer.url} target="_blank"><button>Watch Trailer</button></a>
                    </div>
                </div>
            )}
        </div>
    )
}

export default DetailsPage