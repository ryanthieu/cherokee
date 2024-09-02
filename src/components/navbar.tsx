import {Link} from 'react-router-dom';
import '../App.css';
import LogoImage from '../images/ace.png'
import './navbar.css'
//import Button from 'rsuite/Button';
import 'rsuite/Button/styles/index.css';

export const Navbar = () =>{
    return(
       <div>
       <nav className="ok">
  <div className="logo-container">
    <Link to="/" className="flex-shrink-0">
      <img src={LogoImage} className="logo" alt="ACE Logo" />
    </Link>
  </div>
  <div className="links-container">
    <Link to="/" className="nav-link">Home</Link>
    <Link to="/learnmore" className="nav-link">Learn More</Link>
    <Link to="/information" className="nav-link">Information</Link>
    <Link to="/slideshow" className="nav-link">Slideshow</Link>
    <Link to ="/additionalresources" className="nav-link">Additional Resources</Link>

  </div>
</nav>
<hr></hr>
</div>
      
    );
}