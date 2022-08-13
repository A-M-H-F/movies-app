import { Link } from 'react-router-dom';
import '../assets/css/nav.css';

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <span className="navbar-brand f-right"><Link to="#" className="nav-link">Movies App</Link></span>
        <span className="navbar-brand"><Link to="/" className="nav-link">Home</Link></span>
        <span className="navbar-brand"><Link to="/pages/create" className="nav-link">Add New Movie</Link></span>
      </nav>
    </div>
  );
}

export default Navbar;
