function Card(props) {
    return (
        <figure onClick={props.clickHandler}>
            <img src={props.image.src} alt={props.image.name} />
            <figcaption>{props.image.name}</figcaption>
        </figure>
    );
}

export default Card;