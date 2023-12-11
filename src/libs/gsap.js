
import { gsap } from "gsap";

// 🎁 Toda la SINTAXIS que podemos utilizar con GSAP
// ⚠️ Recuerda que en GSAP podemos utilizar CUALQUIER PROPIEDAD de CSS:
// x: 100                   transform: translateX(100px)
// y: 100                   transform: translateY(100px)
// rotation: 360            transform: rotate(360deg)
// rotationX: 360           transform: rotateX(360deg)
// rotationY: 360           transform: rotateY(360deg)
// skewX: 45                transform: skewX(45deg)
// skewY: 45                transform: skewY(45deg)
// scale: 2                 transform: scale(2, 2)
// scaleX: 2                transform: scaleX(2)
// scaleY: 2                transform: scaleY(2)
// xPercent: -50            transform: translateX(-50%)
// yPercent: -50            transform: translateY(-50%)

// =============== GSAP ANIMATION ===============
const opacityAnimation = () => {
  gsap.from(".home_village", 0.8, { opacity: 0, y: 100, delay: 0.2 });
  gsap.from(".home_pine", 0.8, { opacity: 0, y: 150, delay: 0.3 });
  gsap.from(".home_mountain-2", 0.8, { opacity: 0, x: 150, delay: 0.5 });
  gsap.from(".home_mountain-3", 0.8, { opacity: 0, x: -150, delay: 0.6 });
  gsap.from(".home_mountain-1", 0.8, { opacity: 0, y: 250, delay: 0.2 });
  
  gsap.from(".home_moon", 0.8, { opacity: 0, y: 200, delay: 0.8 });
  gsap.from(".home_trineo", 0.8, { opacity: 0, x: -200, delay: 0.8 });
  
  gsap.from(".home_title", 0.8, { opacity: 0, y: -60, delay: 1 });
}

export default opacityAnimation;