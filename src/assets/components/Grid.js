// The Grid Design in the intro section.
import GraphicDesignIcon from '../pattern-graphic-design.svg';
import UIUXIcon from '../pattern-ui-ux.svg';
import AppsIcon from '../pattern-apps.svg';
import PhotographyIcon from '../pattern-photography.svg';
import IllustrationsIcon from '../pattern-illustrations.svg';
import MotionGraphicsIcon from '../pattern-motion-graphics.svg';

const Grid = () => {
    return (
        <div className="grid-container">
            <figure className="bg-galacticBlue grid-box full-col">
                <div className="inner-grid-box">
                    <img src={GraphicDesignIcon} alt="" />
                    <figcaption>Graphic Design</figcaption>
                </div>
            </figure>
            <div class="multi-col flex-row">
                <figure className="bg-summerYellow grid-box">
                    <div className="inner-grid-box">
                        <img src={UIUXIcon} alt="" />
                        <figcaption>UI/UX</figcaption>
                    </div>
                </figure>
                <figure className="bg-pink grid-box">
                    <div className="inner-grid-box">
                        <img src={AppsIcon} alt="" />
                        <figcaption>Apps</figcaption>
                    </div>
                </figure>
            </div>
            <figure className="bg-cyan grid-box">
                <div className="inner-grid-box">
                    <img src={PhotographyIcon} alt="" />
                    <figcaption>Photography</figcaption>
                </div>
            </figure>
            <figure className="bg-lightRed grid-box">
                <div className="inner-grid-box">
                    <img src={IllustrationsIcon} alt="" />
                    <figcaption>Illustrations</figcaption>
                </div>
            </figure>
            <figure className="bg-darkPurple grid-box">
                <div className="inner-grid-box">
                    <img src={MotionGraphicsIcon} alt="" />
                    <figcaption>Motion Graphics</figcaption>
                </div>
            </figure>
        </div>
    )
}

export default Grid;