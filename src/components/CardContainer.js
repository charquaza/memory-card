import { useState, useRef } from "react";
import Card from "./Card";
import images from "../images";

function CardContainer(props) {
    const [orderedImages, setOrderedImages] = useState(shuffle(images));

    var clickedImages = useRef([]);

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
        var currImage = e.currentTarget.id;

        if (clickedImages.current.includes(currImage)) {
            alert("Oops, you lose!");
            clickedImages.current = [currImage];
            props.updateScores(false);
        } else {
            clickedImages.current.push(currImage);
            props.updateScores(true);
        }

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