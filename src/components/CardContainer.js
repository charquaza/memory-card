import {useState} from "react";
import Card from "./Card";
import images from "../images";

function CardContainer() {
    const [orderedImages, setOrderedImages] = useState(shuffle(images));

    function shuffle(list) {
        var shuffled = list.slice();
        var currentIndex = shuffled.length;

        while (currentIndex !== 0) {
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [ shuffled[currentIndex], shuffled[randomIndex] ] = [ 
                shuffled[randomIndex], shuffled[currentIndex] 
            ];
        }

        return shuffled;
    }

    function handleClick(e) {
        setOrderedImages(shuffle(orderedImages));
    }

    return (
        <main>
            <div>
                {orderedImages.map((image) => {
                    return (
                        <Card image={image} clickHandler={handleClick} key={image.name} />
                    );
                })}
            </div>
        </main>
    );
}

export default CardContainer;