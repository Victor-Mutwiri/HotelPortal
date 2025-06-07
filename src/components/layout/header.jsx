import "../../styles/Header.css";
import Logo from "../../assets/Vimtec logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* <div className="logo">Hotel Logo</div> */}
        <img
          src={Logo}
          alt="Hotel Logo"
          className="logo-image"
        />
      </div>
    </header>
  );
}

export default Header;