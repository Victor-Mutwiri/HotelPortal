import "../../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p className="copyright">
            © {new Date().getFullYear()} SanValencia Hotel. All rights reserved.
          </p>
          <div className="footer-links">
            <a href="#" className="footer-link">Privacy Policy</a>
            <span className="divider">|</span>
            <a href="#" className="footer-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;