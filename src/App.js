import AmyPicture from './assets/image-amy.webp';
import Carousel from './assets/components/Carousel';
import './assets/styles/main.scss';
import { Header, Footer } from './assets/components/Navigation';
import Grid from './assets/components/Grid';

function App() {
  return (
    <div className="layout-container">
      <Header />
      <main>
        <section style={{ textAlign: "center" }} id="intro">
          <h1>Design solutions made easy</h1>
          <p>With over ten years of experience in various design disciplines, I'm your one-stop shop for your design needs.</p>
        </section>
        <section id="experience">
          <Grid />
        </section>
        <section name="about">
          <div className="about-flex flex-row align-center">
            <img src={AmyPicture} alt="Amy with a colorful background" />
            <div className="flex-col h-75 justify-between">
              <h2>I’m Amy, and I’d love to work on your next project</h2>
              <p>I love working with others to create beautiful design solutions. I’ve designed everything from brand illustrations to complete mobile apps. I’m also handy with a camera!</p>
              <button type="button" className="btn btn-lightRed" aria-label="Free Consultation">Free Consultation</button>
            </div>
          </div>
        </section>
        <section className="flex-col justify-center" style={{ textAlign: "center" }} id="work">
          <h3>My Work</h3>
          <Carousel />
        </section>
        <section id="book-call">
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
