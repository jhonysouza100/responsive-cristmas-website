import { useState } from "react";
import '../styles/Modals.css';

function Modals() {
  // =============== SHOW SCROLL UP ===============
  const [up, setUp] = useState("");
  const scrollUp = () => {
    // when the scroll is higher than 350 viewport innerHeight, add the show-scroll class to the a tag with the scrollup
    window.scrollY >= 350 ? setUp(" show-scroll") : setUp("");
  };
  
  window.addEventListener("scroll", scrollUp);

  return (
    <>
      {/* =============== SCROLL UP =============== */}
      <a href="#" className={`scrollup${up}`} id="scroll-up">
        <i className="ri-arrow-up-line"></i>
      </a>

      {/* =============== DOCUMENTATION LINK =============== */}
        <a className="documentation-link" href="https://github.com/WarDog1000/responsive-cristmas-website">
          <i className="ri-git-repository-fill"></i>
        </a>
    </>
  );
}

export default Modals;
