import logo from './logo.svg';
import AmyPicture from './assets/image-amy.webp';
import ImageSlide1 from './assets/image-slide-1.jpg';
import ImageSlide2 from './assets/image-slide-2.jpg';
import ImageSlide3 from './assets/image-slide-3.jpg';
import ImageSlide4 from './assets/image-slide-4.jpg';
import ImageSlide5 from './assets/image-slide-5.jpg';
import {Carousel, CarouselItem} from './assets/components/Carousel';
import './assets/styles/main.scss';
import { Header, Footer } from './assets/components/Navigation';
import Grid from './assets/components/Grid';

function App() {
  return (
    <div className="layout-container">
      <Header />
      <main>
        <section style={{ textAlign: "center" }} name="intro">
          <h1>Design solutions made easy</h1>
          <p>With over ten years of experience in various design disciplines, I'm your one-stop shop for your design needs.</p>
        </section>
        <section name="experience">
          <Grid />
        </section>
        <section style={{ marginTop: "136px" }} name="about">
          <div className="about-flex flex-row justify-between align-center">
            <img src={AmyPicture} alt="Picture of Amy" />
            <div className="flex-col h-75 justify-between">
              <h2>I’m Amy, and I’d love to work on your next project</h2>
              <p style={{ marginTop: "34px" }}>I love working with others to create beautiful design solutions. I’ve designed everything from brand illustrations to complete mobile apps. I’m also handy with a camera!</p>
              <button type="button" style={{ marginTop: "32px" }} className="btn btn-lightRed" aria-label="Free Consultation">Free Consultation</button>
            </div>
          </div>
        </section>
        <section className="flex-col justify-center" style={{ marginTop: "88px", textAlign: "center" }} name="work">
          <h3>My Work</h3>
          <div className="work-carousel-container">
            <Carousel>
              <CarouselItem img={ImageSlide1} slide={1} />
              <CarouselItem img={ImageSlide2} slide={2} />
              <CarouselItem img={ImageSlide3} slide={3} />
              <CarouselItem img={ImageSlide4} slide={4} />
              <CarouselItem img={ImageSlide5} slide={5} />
            </Carousel>
          </div>
        </section>
        <section style={{ marginTop: "88px"}} name="book-call">
          <div className="book-call-container flex-row justify-between align-center">
            <div className="book-call-text flex-col">
              <h2>Book a call with me</h2>
              <p>I’d love to have a chat to see how I can help you. The best first step is for us to discuss your project during a free consultation. Then we can move forward from there.</p>
            </div>
            <button type="button" className="btn btn-lightRed" aria-label="Free Consultation">Free Consultation</button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
