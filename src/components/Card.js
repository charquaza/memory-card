function Card(props) {
    return (
        <figure id={props.image.name} onClick={props.clickHandler}>
            <img src={props.image.src} alt={props.image.name} />
            <figcaption>{props.image.name}</figcaption>
        </figure>
    );
}

export default Card;