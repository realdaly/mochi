import CardList from "./CardList"
import useFetch from "./useFetch"

const Home = () => {
    const { data:animeCards } = useFetch('https://api.jikan.moe/v4/top/anime')
    const { data:mangaCards } = useFetch('https://api.jikan.moe/v4/top/manga')

    return(
        <div className="home">
            { animeCards && <CardList cards={animeCards.data} title="Top Anime" type="anime" /> }
            { mangaCards && <CardList cards={mangaCards.data} title="Top Manga" type="manga" /> }
        </div>
    )
}

export default Home