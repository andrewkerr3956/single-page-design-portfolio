import logo from "../logo.svg";
const Header = () => {
    return (
        <header>
            <div className="flex">
                <img src={logo} alt="Logo" />
                <button className="btn btn-black" type="button" aria-label="Free Consultation">Free Consultation</button>
            </div>
        </header>
    );
}

const Footer = () => {
    return (
        <footer>
        </footer>
    );
}

export { Header, Footer };