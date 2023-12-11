import { useState, useEffect } from 'react';
import '../styles/Header.css'
import images from '../data/images.js';
import texts from '../data/texts.js';
function Header() {

  const {logo, snowImg} = images;
  const {textNav, textNav2, textNav3, textNav4, textNav5} = texts
  // =============== CHANGE HEADER BACKGROUND ===============
  const [bgHead, setBgHead] = useState("");
  const scrollHeader = () => {
    // When the scroll is greater than 50 viewport innerHeight, add the scroll-header
    window.scrollY >= 50 ? setBgHead(" bg-header") : setBgHead("");
  };
  window.addEventListener("scroll", scrollHeader);

  // =============== REMOVE MENU MOBILE ===============
  const [isShow, setIsShow] = useState(false);
  const handleShow = () => { setIsShow(!isShow); };
  
  // When we click on each nav_link, we remove the show-menu // Check if the clicked element is a nav_link // Toggle the isShow state
  const handleClick = (e) => { if (e.target.classList.contains("nav_link")) handleShow(); }


  // =============== SCROLL SECTIONS ACTIVE LINK ===============
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const scrollActive = () => {
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute("id"),
          sectionsClass = document.querySelector(
            ".nav_menu a[href*=" + sectionId + "]"
          );

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          sectionsClass.classList.add("active-link");
        } else {
          sectionsClass.classList.remove("active-link");
        }
      });
    };

    window.addEventListener("scroll", scrollActive);
  }, [])
  

  return (
    <header className={`header${bgHead}`} id="header">
      <nav className="nav container">
        {/* Logo image */}
        <a href="#" className="nav_logo">
          <img src={logo} alt="logo image" />
          {textNav}
        </a>
        <div className={`nav_menu ${isShow ? "show-menu" : "" }`} id="nav-menu" onClick={handleClick}>
          <ul className="nav_list">
            <li className="nav_item">
              <a href="#home" className="nav_link active-link">
                {textNav2}
              </a>
            </li>
            <li className="nav_item">
              <a href="#about" className="nav_link">
                {textNav3}
              </a>
            </li>
            <li className="nav_item">
              <a href="#send" className="nav_link">
                {textNav4}
              </a>
            </li>
            <li className="nav_item">
              <a href="#celebrate" className="nav_link">
                {textNav5}
              </a>
            </li>
          </ul>
          {/* Close button */}
          <div className="nav_close" id="nav-close" onClick={handleShow}>
            <i className="ri-close-line" />
          </div>
          {/* Images icon */}
          <img
            src={snowImg}
            alt="nav image"
            className="nav_img-1"
          />
          <img
            src={snowImg}
            alt="nav image"
            className="nav_img-2"
          />
        </div>
        {/* Toggle button */}
        <div className="nav_toggle" id="nav-toggle" onClick={handleShow}>
          <i className="ri-apps-2-line" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
