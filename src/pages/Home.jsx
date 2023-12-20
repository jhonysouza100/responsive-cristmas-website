import Main from "../components/Main.jsx";
import { useContext, useEffect } from "react";
import AppContext from "../context/context.jsx";
import opacityAnimation from "../libs/gsap";
import scrollAnimation from "../libs/scroll-reveal.js";
import parallaxAnimation from "../libs/rellax";
import Wrapper from "../components/Wrapper.jsx";

function Home() {
  const { hello } = useContext(AppContext);
  
   // carga las animaciones
   useEffect(() => { // se ejecuta al primer montado del DOM
    // SCROLL animation
    scrollAnimation();
  
    // PARALLAX ANIMATION
    parallaxAnimation(); // aplicar el paralax antes de la animacion
    
    // MOVEMENT GSAP animation
    opacityAnimation(); // la animacion invierte los valores de posicion en el DOM real
    
  }, []);
  return (
    <Wrapper>
      <Main />
    </Wrapper>
  );
}

export default Home;