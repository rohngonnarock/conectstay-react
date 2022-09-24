import {Link} from "react-router-dom";


const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer_menu">
                    <ul>
                        <li><Link to="/"><a>Home</a></Link></li>
                        <li><Link to="/about"><a>About Us</a></Link></li>
                        <li><Link to="/locations"><a>Locations</a></Link></li>
                        <li><Link to="/hotels"><a>Hotels</a></Link></li>
                        <li><Link to="/mice"><a>Mice</a></Link></li>
                        <li><Link to="/food-service"><a>Corporate Catering</a></Link></li>
                        <li><Link to="/"><a>Cab Service</a></Link></li>
                        <li><Link to="/"><a>Flight service</a></Link></li>
                        <li><Link to="/contact"><a>Contact Us</a></Link></li>
                    </ul>
                </div>
            </div>
            <div className="d-flex justify-content-center copyright">
                <p>Copyright © keytrips.in All right reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;