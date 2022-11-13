import { useParams } from "react-router-dom"
import useFetch from "./useFetch"

const DetailsPage = () => {
    const { type, id } = useParams()
    const { data:detail } = useFetch(`https://api.jikan.moe/v4/${type}/${id}`)

    return(
        <div className="detailsWrapper">
            <div className="img">
                <img src="https://cdn.myanimelist.net/images/anime/1208/94745l.jpg" alt="Cover Image" />
            </div>
            <div className="details">

                <div className="header">
                    <div className="titles">
                        <p className="title">Fullmetal Alchemist</p>
                        <p className="jTitle">フェイト／ステイナイト</p>
                    </div>
                    <div className="rating">
                        9.0/10
                    </div>
                </div>

                <div className="description">
                    Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!
                </div>

                <div className="info">
                    <ul className="info1">
                        <li>Type: <span>TV</span></li>
                        <li>Rating: <span>R - 17+ (violence & profanity)</span></li>
                        <li>Genre: <span>Action</span></li>
                        <li>Status: <span>Finished Airing</span></li>
                    </ul>
                    <ul className="info2">
                        <li>episodes: <span>64</span></li>
                        <li>Duration: <span>24 min per ep</span></li>
                        <li>Year: <span>2009</span></li>
                        <li>Aired: <span>Apr 5, 2009 to Jul 4, 2010</span></li>
                    </ul>
                </div>

                <button>Watch Trailer</button>
            </div>
        </div>
    )
}

export default DetailsPage