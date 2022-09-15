import logo from './logo.svg';
import AmyPicture from './assets/image-amy.webp';
import './assets/styles/main.scss';
import { Header, Footer } from './assets/components/Navigation';
import Grid from './assets/components/Grid';

function App() {
  return (
    <div className="layout-container">
      <Header />
      <main>
        <section name="intro">
          <h1 style={{ textAlign: "center" }}>Design solutions made easy</h1>
          <p style={{ margin: "24px auto 80px auto", textAlign: "center", width: "65%" }}>With over ten years of experience in various design disciplines, I'm your one-stop shop for your design needs.</p>
        </section>
        <section name="experience">
          <Grid />
        </section>
        <section style={{ marginTop: "136px" }} name="about">
          <div className="about-flex flex-row justify-between">
            <img src={AmyPicture} alt="Picture of Amy" />
            <div className="flex-col">
              <h2>I’m Amy, and I’d love to work on your next project</h2>
              <p>I love working with others to create beautiful design solutions. I’ve designed everything from brand illustrations to complete mobile apps. I’m also handy with a camera!</p>
              <button type="button" className="btn btn-lightRed" aria-label="Free Consultation" label="Free Consultation">Free Consultation</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
