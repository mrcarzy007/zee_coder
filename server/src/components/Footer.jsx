import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
// import { RiTwitterXLine } from "react-icons/ri";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container footer__container">
          <article>
            <Link to="/" className="logo">
              <img src={Logo} alt="footer logo" />
            </Link>
            <p>
              ullamcorper malesuada proin libero nunc consequat interdum varius
              sit amet mattis vulputate enim nulla aliquet porttitor
            </p>
            <div className="footer__socials">
              <a
                href="https://linkedin.com/"
                target="__blank"
                rel="noreferrer noopener"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://facebook.com/"
                target="__blank"
                rel="noreferrer noopener"
              >
                {" "}
                <FaFacebookF />{" "}
              </a>
              <a
                href="https://instagram.com/"
                target="__blank"
                rel="noreferrer noopener"
              >
                {" "}
                <FiInstagram />{" "}
              </a>
              {/* <a href="https://instagram.com/" target="__blank" rel="noreferrer noopener" > <RiTwitterXLine/> </a> */}
            </div>
          </article>
          <article>
            <h4>Permalinks</h4>
            <Link to="/about">About</Link>
            <Link to="/plans">Plans</Link>
            <Link to="/trainers">Trainers</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact Us</Link>
          </article>
          <article>
            <h4>Insights</h4>
            <Link to="/s">Blog</Link>
            <Link to="/s">Case Studies</Link>
            <Link to="/s">Events</Link>
            <Link to="/s">Communities</Link>
            <Link to="/s">FAQs</Link>
          </article>
          <article>
            <h4>Get In Touch</h4>
            <Link to="/contact">Contact Us</Link>
            <Link to="/s">Support</Link>
          </article>
        </div>
        <div className="footer__copyright">
          <small className="footer__right">
            {new Date().getFullYear()} &copy; All Rights Reserved{" "}
          </small>
        </div>
      </footer>
    </>
  );
};

export default Footer;
