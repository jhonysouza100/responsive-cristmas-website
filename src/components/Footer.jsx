import '../styles/Footer.css';
import images from '../data/images.js';
import texts from '../data/texts.js';
function Footer() {
  const {snowImg} = images;
  const { textFooter, textCopyright, facebook, instagram, twitter } = texts;
  return (
    <footer className="footer">
      <div className="footer_container container">
        <a href="#" className="footer_logo">
          {textFooter}
        </a>
        <ul className="footer_social">
          <li>
            <a
              href={facebook}
              target="_blank"
              className="footer_social-link"
            >
              <i className="ri-facebook-fill" />
            </a>
          </li>
          <li>
            <a
              href={instagram}
              target="_blank"
              className="footer_social-link"
            >
              <i className="ri-instagram-fill" />
            </a>
          </li>
          <li>
            <a
              href={twitter}
              target="_blank"
              className="footer_social-link"
            >
              <i className="ri-twitter-fill" />
            </a>
          </li>
        </ul>
        <span className="footer_copy">{textCopyright}</span>
        <img
          src={snowImg}
          alt="footer image"
          className="footer_snow-1 snow"
        />
        <img
          src={snowImg}
          alt="footer image"
          className="footer_snow-2 snow"
        />
      </div>
    </footer>
  );
}

export default Footer;
