import logo from '../img/logo.png';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <div className="navbar">
            <Link to='/'><img src= {logo}></img></Link>
        </div>
    )
};

export default Navbar;