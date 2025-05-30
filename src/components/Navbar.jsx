import { Link } from "react-scroll"
import Home from "./Home"

const Navbar = () => {
    return (
        <div id="header">
            <div className="container">
                <nav>
                    <h1 className="logo"><span>V</span>aibhav.</h1>
                    <ul id="sidemenu">
                        <li>
                            <Link to="/" smooth={true} duration={500}>Home</Link>
                        </li>
                        <li>
                            <Link to="about" smooth={true} duration={500}>About</Link>
                        </li>
                        <li>
                            <Link to="services" smooth={true} duration={500}>Services</Link>
                        </li>
                        <li>
                            <Link to="portfolio" smooth={true} duration={500}>Projects</Link>
                        </li>
                        <li>
                            <Link to="contact" smooth={true} duration={500}>Contact</Link>
                        </li>
                        {/* <i class="fas fa-times" onClick="closemenu()"></i> */}
                    </ul>
                    {/* <i class="fas fa-bars" onClick="openmenu()"></i> */}
                </nav>

                <Home />
            </div>
        </div>
    )
}

export default Navbar