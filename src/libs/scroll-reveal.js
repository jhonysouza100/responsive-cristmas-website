import ScrollReveal from 'scrollreveal'
// =============== SCROLL REVEAL ANIMATION ===============
const scrollAnimation = () => {
  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
  })

  sr.reveal(`.about_data, .celebrate_img`, {origin: 'right'})
  sr.reveal(`.about_img, .celebrate_data`, {origin: 'left'})
  sr.reveal(`.send_card`, {interval: 100})
  sr.reveal(`.footer`)
}

export default scrollAnimation;