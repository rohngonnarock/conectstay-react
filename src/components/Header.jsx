import { Link, NavLink } from "react-router-dom";
import logo from '../public/logo.svg';

const Header = () => {
    return(
        <header>
            <div className="d-flex justify-content-between top_header">
                <div><a href="#"><i className="fa fa-mobile"></i> +91 9654 377 137</a></div>
                <div><a href="mailto: bookings@keytrips.in"><i className="fa fa-envelope"></i> bookings@keytrips.in</a></div>
            </div>
            <div className="main_logo">
                <Link href="/"><a><img src={logo} /></a></Link>
            </div>

            <div className="main_menu">
                <ul>
                    <li><NavLink exact  to="/"><a>Home</a></NavLink></li>
                    <li><NavLink exact  to="/about"><a>About Us</a></NavLink></li>
                    <li><NavLink exact  to="/locations"><a>Locations</a></NavLink></li>
                    <li><NavLink exact  to="/hotels"><a>Hotels</a></NavLink></li>
                    {/* <li><ActiveLink activeClassName="active" href="/"><a>Services</a></ActiveLink></li> */}
                    <li><NavLink exact  to="/contact"><a>Contact Us</a></NavLink></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;