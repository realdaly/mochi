import Card from "./Card"

const CardList = (props) => {
    const cards = props.cards
    const title = props.title
    const type = props.type

    return(
        <div className="cards">
            <p className="title">{title}</p>
            <div className="cardList">
                {
                    cards.map(card => (
                        <Card key={card.mal_id} src={card.images.jpg.large_image_url} title={card.title} rate={card.score} type={type} id={card.mal_id} />
                    ))
                }
            </div>
        </div>
    )
}

export default CardList