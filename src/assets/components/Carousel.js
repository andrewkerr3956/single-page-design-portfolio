import { useEffect, useState } from "react";
import LeftArrowIcon from '../icon-arrow-left.svg';
import RightArrowIcon from '../icon-arrow-right.svg';
import ImageSlide1 from '../image-slide-1.jpg';
import ImageSlide2 from '../image-slide-2.jpg';
import ImageSlide3 from '../image-slide-3.jpg';
import ImageSlide4 from '../image-slide-4.jpg';
import ImageSlide5 from '../image-slide-5.jpg';
const Carousel = (props) => {

    // Initialize the carousel.
    const [carouselItems, setCarouselItems] = useState([<CarouselItem key={1} img={ImageSlide1} slide={1} />,
    <CarouselItem key={2} img={ImageSlide2} slide={2} />,
    <CarouselItem key={3} img={ImageSlide3} slide={3} />,
    <CarouselItem key={4} img={ImageSlide4} slide={4} />,
    <CarouselItem key={5} img={ImageSlide5} slide={5} />]);

    useEffect(() => {
        console.log("CAROUSEL ITEMS CHANGED: " + carouselItems);
    }, carouselItems)

    const validateSlide = async(dir = "left") => {
        let currentCarousel = Array.from(carouselItems);
        let reorderCarousel;
        console.log("Validating " + dir);
        console.warn(carouselItems);
        switch (dir) {
            case "left": {
                reorderCarousel = currentCarousel.pop();
                currentCarousel.unshift(reorderCarousel);
                setCarouselItems(currentCarousel);
                break;
            }
            case "right": {
                reorderCarousel = currentCarousel.shift();
                currentCarousel.push(reorderCarousel);
                setCarouselItems(currentCarousel);
                break;
            }
            case "*": {
                console.error("There was an error handling the carousel scroll buttons.");
                break;
            }
        }
    }

    return (
        <div className="work-carousel-container">
            <div id="carousel-items" className="work-carousel flex-row justify-center">
                {carouselItems}
            </div>
            <div className="scroll-buttons flex-row justify-center">
                <CarouselControls validateSlide={validateSlide} />
            </div>
        </div>
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

export default Carousel;