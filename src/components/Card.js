import images from "../images";

function Card() {
    return (
        <div>
            {images.map((image, index) => {
                return (
                    <figure key={index}>
                        <img src={image.src} alt={image.name} />
                        <figcaption>{image.name}</figcaption>
                    </figure>
                );
            })}
        </div>
    );
}

export default Card;