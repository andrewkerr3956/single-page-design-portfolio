const CarouselItem = (props) => {
    return (
        <div className="work-carousel-item">
            <img src={props.img ? props.img : '#'} alt={props.img ? props.img + " image" : ""} />
        </div>
    )
}

export default CarouselItem;