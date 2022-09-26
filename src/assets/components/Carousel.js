import { useEffect, useState } from "react";
import LeftArrowIcon from '../icon-arrow-left.svg';
import RightArrowIcon from '../icon-arrow-right.svg';
const Carousel = (props) => {
    // Retrieve the slides in the "My Work" carousel. There should be 5 carousel slides (up to index of 4).
    const carouselItems = document.getElementsByClassName("work-carousel-item");

    // Initialize the current slide and have it start at slide 3 (index 2).
    const [currentItem, setCurrentItem] = useState(2);
    const [itemsInView, setItemsInView] = useState([currentItem-1, currentItem, currentItem+1]);

    const validateSlide = (dir="left") => {
        let testCurrentItem = currentItem;
        switch(dir) {
            case "left": {
                let prevItem = testCurrentItem--;
                if(--testCurrentItem < 0) {
                    prevItem = carouselItems.length - 1;
                }
                setCurrentItem(prevItem);
                break;
            }
            case "right": {
                let nextItem = testCurrentItem++;
                if(++testCurrentItem > carouselItems.length - 1) {
                    nextItem = 0;
                }
                setCurrentItem(nextItem);
                break;
            }
            case "*": {
                console.error("There was an error handling the carousel scroll buttons.");
                break;
            }
        }
    }

    return (
        <>
            <div className="work-container flex-row">
                {props.children}
            </div>
            <div className="scroll-buttons flex-row justify-center">
                <CarouselControls validateSlide={validateSlide} />
            </div>
        </>
    )
}

const CarouselItem = (props) => {
    return (
        <div className="work-carousel-item">
            <img src={props.img ? props.img : '#'} alt={props.img ? props.img + " image" : ""} />
        </div>
    )
}

const CarouselControls = (props) => {
    return (
        <>
            <button id="scroll-left" type="button" aria-label="Left" onClick={() => props.validateSlide("left")}><img src={LeftArrowIcon} alt="Left Arrow" /></button>
            <button id="scroll-right" type="button" aria-label="Right" onClick={() => props.validateSlide("right")}><img src={RightArrowIcon} alt="Right Arrow" /></button>
        </>
    )
}

export { Carousel, CarouselItem };