import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Travelly</h1>
          <p>Choose the destination that captures your heart</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-squarei"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-squarei"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-behance-squarei"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-squarei"></i>
          </a>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h4>Project</h4>
          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">All Versions</a>
        </div>

        <div>
          <h4>Community</h4>
          <a href="/">Facebook</a>
          <a href="/">Instagram</a>
          <a href="/">Twitter</a>
        </div>

        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Troubleshooting</a>
          <a href="/">Contact Us</a>
        </div>

        <div>
          <h4>Others</h4>
          <a href="/">Terms of Service</a>
          <a href="/">Privacy Policy</a>
          <a href="/">License</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;