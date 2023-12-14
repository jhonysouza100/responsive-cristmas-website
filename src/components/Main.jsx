import "../styles/Main.css";
import images from '../data/images.js';
import texts from '../data/texts.js';
import { Link } from "react-router-dom";
function Main() {
  const { aboutChristmas, celebrateChurch, homeMoon, homeMountain1, homeMountain2, homeMountain3, homePineTree, homeSnow, homeTrineoSanta, homeVillage, sendGifts, sendNight, sendSanta, snowImg } = images;
  const { textHome, textAbout, textAbout2, textAbout3, textAbout4, textSend, textSend2, textSend3, textSend4, textSend5, textSend6, textSend7, textSend8, textCelebrate, textCelebrate2, textCelebrate3, textCelebrate4 } = texts;

  return (
    <main className="main">
      <section className="home section" id="home">
        <h1 className="home_title">{textHome}</h1>

        <img
          src={homeMoon}
          alt="home image"
          className="home_moon parallax"
          data-rellax-speed="-12"
        />


        <img
          src={homeTrineoSanta}
          alt="home image"
          className="home_trineo parallax"
          data-rellax-speed="-2"
        />
        <img
          src={homeMountain3}
          alt="home image"
          className="home_mountain-3 parallax"
          data-rellax-speed="-6"
        />
        <img
          src={homeMountain2}
          alt="home image"
          className="home_mountain-2 parallax"
          data-rellax-speed="-6"
        />
        <img
          src={homePineTree}
          alt="home image"
          className="home_pine parallax"
          data-rellax-speed="-7"
        />
        <img
          src={homeVillage}
          alt="home imge"
          className="home_village parallax"
          data-rellax-speed="-9"
        />
        <img
          src={homeSnow}
          alt="home image"
          className="home_snow parallax"
        />
        <img
          src={homeMountain1}
          alt="home image"
          className="home_mountain-1"
        />
      </section>

      {/* =============== ABOUT =============== */}
      <section className="about section" id="about">
        <div className="about_container container grid">
          <div className="about_data">
            <h2 className="section_title">{textAbout}<br />{textAbout2}</h2>

            <p className="about_description">{textAbout3}</p>

            {/* <a href="#" className="button">{textAbout4}</a> */}
            <Link to="/signin" className="button">{textAbout4}</Link>
          </div>

          <img
            src={aboutChristmas}
            alt="about image"
            className="about_img"
          />

          <img
            src={snowImg}
            alt="about image"
            className="about_snow-1 snow"
          />
          <img
            src={snowImg}
            alt="about image"
            className="about_snow-2 snow"
          />
        </div>
      </section>

      {/* =============== SEND =============== */}
      <section className="send section" id="send">
        <h2 className="section_title">{textSend}<br />{textSend2}</h2>

        <div className="send_container container grid">
          <div className="send_card">
            <img src={sendNight} alt="send image" className="send_img" />

            <h3 className="send_title">{textSend3}</h3>

            <p className="send_description">{textSend4}
            </p>
          </div>

          <div className="send_card">
            <img src={sendGifts} alt="send image" className="send_img" />

            <h3 className="send_title">{textSend5}</h3>

            <p className="send_description">{textSend6}</p>
          </div>

          <div className="send_card">
            <img src={sendSanta} alt="send image" className="send_img" />

            <h3 className="send_title">{textSend7}</h3>

            <p className="send_description">{textSend8}</p>
          </div>

          <img
            src={snowImg}
            alt="send image"
            className="send_snow-1 snow"
          />
          <img
            src={snowImg}
            alt="send image"
            className="send_snow-2 snow"
          />
          <img
            src={snowImg}
            alt="send image"
            className="send_snow-3 snow"
          />
        </div>
      </section>

      {/* =============== CELEBRATE =============== */}
      <section className="celebrate section" id="celebrate">
        <div className="celebrate_container container grid">
          <div className="celebrate_data">
            <h2 className="section_title">{textCelebrate}<br />{textCelebrate2}</h2>

            <p className="celebrate_description">{textCelebrate3}</p>

            <a href="#" className="button">{textCelebrate4}</a>
          </div>

          <img
            src={celebrateChurch}
            alt="celebrate img"
            className="celebrate_img"
          />

          <img
            src={snowImg}
            alt="celebrate image"
            className="celebrate_snow-1 snow"
          />
          <img
            src={snowImg}
            alt="celebrate image"
            className="celebrate_snow-2 snow"
          />
        </div>
      </section>
    </main>
  );
}

export default Main;
