import { Link } from 'react-router-dom';
import '../assets/css/nav.css';

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <span className="navbar-brand f-right nav-link">Movies App</span>
        <span className="navbar-brand"><a href="/" className="nav-link">Home</a></span>
        <span className="navbar-brand"><Link to="/pages/create" className="nav-link">Add New Movie</Link></span>
      </nav>
    </div>
  );
}

export default Navbar;
