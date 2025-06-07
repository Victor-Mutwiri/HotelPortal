
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-lg font-bold">Grand Vista Hotel</div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-blue-600 hover:text-blue-800">Home</Link>
          </li>
          <li>
            <Link to="/services" className="text-blue-600 hover:text-blue-800">Services</Link>
          </li>
          <li>
            <Link to="/contact" className="text-blue-600 hover:text-blue-800">Contact</Link>
          </li>
          <li>
            <Link to="/faq" className="text-blue-600 hover:text-blue-800">FAQ</Link>
          </li>
          <li>
            <Link to="/menu" className="text-blue-600 hover:text-blue-800">Menu</Link>
          </li>
          <li>
            <Link to="/recommendations" className="text-blue-600 hover:text-blue-800">Recommendations</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;