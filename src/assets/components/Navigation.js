import logo from "../logo.svg";
const Header = () => {
    return (
        <header>
            <div className="flex flex-row justify-between align-center w-100">
                <img className="logo" src={logo} alt="Logo" />
                <button className="btn btn-black" type="button" aria-label="Free Consultation">Free Consultation</button>
            </div>
        </header>
    );
}

const Footer = () => {
    return (
        <footer>
            <div className="flex flex-row justify-between align-center w-100">
                <img className="logo" src={logo} alt="Logo" />
                <button className="btn btn-black" type="button" aria-label="Free Consultation">Free Consultation</button>
            </div>
        </footer>
    );
}

export { Header, Footer };