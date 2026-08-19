import Photo from "../assets/Calendar.png";
import Photo1 from "../assets/Photo1.png";
import Photo2 from "../assets/Photo2.png";
import { Typewriter } from "react-simple-typewriter";
import "../css/Calendar.css";
import "../css/Home.css";
import "../css/BirthdayModal.css";
import no1 from "../assets/no1.png";
import no9 from"../assets/no9.png";
import { useState } from "react";
import BirthdayModal from "../components/BirthdayModal";

function Home() {
  const [showBirthday, setShowBirthday] = useState(false);
  return (
    <>
      <div>
        <div className="photo-container">
          <img className="photo" src={Photo} alt="Bg" />
        </div>
        <div>
          <img className="photo1" src={Photo1} alt="Bg" />
        </div>
        <div>
          <img className="photo2" src={Photo2} alt="hang" />
        </div>
      </div>
      <div className="numbers">
        <div>
          <img className="no1" src={no1} alt="no1" />
        </div>
        <div>
          <img className="no9" src={no9} alt="no9" />
        </div>
      </div>

      <div>
        <button
          className="birthday-open-btn"
          onClick={() => setShowBirthday(true)}
        >
          Open Birthday
        </button>

        {showBirthday && (
          <BirthdayModal onClose={() => setShowBirthday(false)} />
        )}
      </div>

      <div className="auto-container">
        <span className="auto" style={{ fontSize: "25px" }}>
          <Typewriter
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={150}
            deleteSpeed={50}
            delaySpeed={1000}
            words={["A date worth celebrating"]}
          />
        </span>
      </div>

      <div className="confetti-right">
        <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          <g class="confetti-cone">
            <path
              class="conf0"
              d="M131.5 172.6L196 343c2.3 6.1 11 6.1 13.4 0l65.5-170.7z"
            />

            <path
              class="conf1"
              d="M131.5 172.6L196 343c2.3 6.1 11 6.1 13.4 0l6.7-17.5-53.6-152.9z"
            />

            <path
              class="conf2"
              d="M274.2 184.2c-1.8 1.8-4.2 2.9-7 2.9l-129.5.4c-5.4 0-9.8-4.4-9.8-9.8s4.4-9.8 9.9-9.9l129.5-.4c5.4 0 9.8 4.4 9.8 9.8 0 2.8-1.1 5.3-2.9 7z"
            />

            <polygon
              class="conf3"
              points="231.5 285.4 174.2 285.5 143.8 205.1 262.7 204.7"
            />

            <path
              class="conf4"
              d="M166.3 187.4l-28.6.1c-5.4 0-9.8-4.4-9.8-9.8s4.4-9.8 9.9-9.9l24.1-.1s-2.6 5-1.3 10.6c1.2 6 5.7 9.1 5.7 9.1z"
            />

            <ellipse class="conf2" cx="233.9" cy="224" rx="5.6" ry="5.6" />

            <path
              class="conf5"
              d="M143.8 205.1l5.4 14.3c6.8-2.1 14.4-.5 19.7 4.8 7.7 7.7 7.6 20.1-.1 27.8-1.7 1.7-3.7 3-5.8 4l11.1 29.4 27.7 0-28-80.5z"
            />

            <path
              class="conf2"
              d="M169 224.2c-5.3-5.3-13-6.9-19.7-4.8l13.9 36.7c2.1-1 4.1-2.3 5.8-4 7.6-7.7 7.6-20.2 0-27.9z"
            />

            <ellipse class="conf6" cx="207.4" cy="254.3" rx="11.3" ry="11.2" />
          </g>

          <circle class="conf2" id="b1" cx="195.2" cy="232.6" r="5.1" />
          <circle class="conf0" id="b2" cx="230.8" cy="219.8" r="5.4" />
          <circle class="conf0" id="c2" cx="178.9" cy="160.4" r="4.2" />
          <circle class="conf6" id="d2" cx="132.8" cy="123.6" r="5.4" />
          <circle class="conf0" id="d3" cx="151.9" cy="105.1" r="5.4" />

          <path
            class="conf0"
            id="d1"
            d="M129.9 176.1l-5.7 1.3c-1.6.4-2.2 2.3-1.1 3.5l3.8 4.2c1.1 1.2 3.1.8 3.6-.7l1.9-5.5c.4-1.6-1-3.2-2.5-2.8z"
          />

          <path
            class="conf6"
            id="b5"
            d="M284.5 170.7l-5.4 1.2c-1.5.3-2.1 2.2-1 3.3l3.6 3.9c1 1.1 2.9.8 3.4-.7l1.8-5.2c.5-1.3-.8-2.8-2.4-2.5z"
          />

          <circle class="conf6" id="c3" cx="206.7" cy="144.4" r="4.5" />

          <path
            class="conf2"
            id="c1"
            d="M176.4 192.3h-3.2c-1.6 0-2.9-1.3-2.9-2.9v-3.2c0-1.6 1.3-2.9 2.9-2.9h3.2c1.6 0 2.9 1.3 2.9 2.9v3.2c0 1.6-1.3 2.9-2.9 2.9z"
          />

          <path
            class="conf2"
            id="b4"
            d="M263.7 197.4h-3.2c-1.6 0-2.9-1.3-2.9-2.9v-3.2c0-1.6 1.3-2.9 2.9-2.9h3.2c1.6 0 2.9 1.3 2.9 2.9v3.2c0 1.6-1.3 2.9-2.9 2.9z"
          />

          <path
            id="yellow-strip-1"
            d="M179.7 102.4s6.6 15.3-2.3 25-24.5 9.7-29.7 15.6-.7 18.6 3.7 28.2 2.2 23-10.4 28.2"
          />

          <path
            class="conf8"
            id="yellow-strip-2"
            d="M252.2 156.1s-16.9-3.5-28.8 2.4-14.9 17.8-16.4 29-4.3 28.8-31.5 33.4"
          />

          <path
            class="conf0"
            id="a1"
            d="M277.5 254.8h-3.2c-1.6 0-2.9-1.3-2.9-2.9v-3.2c0-1.6 1.3-2.9 2.9-2.9h3.2c1.6 0 2.9 1.3 2.9 2.9v3.2c0 1.6-1.3 2.9-2.9 2.9z"
          />

          <path
            class="conf3"
            id="c4"
            d="M215.2 121.3c.3.6.8 1 1.5 1.1 1.6.2 2.2 2.2 1.1 3.3-.5.4-.7 1.1-.6 1.7.3 1.6-1.4 2.8-2.8 2-.6-.3-1.2-.3-1.8 0-1.4.7-3.1-.5-2.8-2 .1-.6-.1-1.3-.6-1.7-1.1-1.1-.5-3.1 1.1-3.3.6-.1 1.2-.5 1.5-1.1.7-1.5 2.7-1.5 3.4 0z"
          />

          <path
            class="conf3"
            id="b3"
            d="M224.5 191.7c.3.6.8 1 1.5 1.1 1.6.2 2.2 2.2 1.1 3.3-.5.4-.7 1.1-.6 1.7.3 1.6-1.4 2.8-2.8 2-.6-.3-1.2-.3-1.8 0-1.4.7-3.1-.5-2.8-2 .1-.6-.1-1.3-.6-1.7-1.1-1.1-.5-3.1 1.1-3.3.6-.1 1.2-.5 1.5-1.1.7-1.5 2.7-1.5 3.4 0z"
          />

          <path
            class="conf3"
            id="a2"
            d="M312.6 242.1c.3.6.8 1 1.5 1.1 1.6.2 2.2 2.2 1.1 3.3-.5.4-.7 1.1-.6 1.7.3 1.6-1.4 2.8-2.8 2-.6-.3-1.2-.3-1.8 0-1.4.7-3.1-.5-2.8-2 .1-.6-.1-1.3-.6-1.7-1.1-1.1-.5-3.1 1.1-3.3.6-.1 1.2-.5 1.5-1.1.7-1.5 2.7-1.5 3.4 0z"
          />

          <path
            class="conf8"
            id="yellow-strip-3"
            d="M290.7 215.4s-14.4-3.4-22.6 2.7-8.2 23.3-17.1 29.4-19.8-2.7-32.2-4.1-19.2 5.5-20.5 10.9"
          />
        </svg>
      </div>

      <div className="confetti-left">
        <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          <g class="confetti-cone">
            <path
              class="conf0"
              d="M131.5 172.6L196 343c2.3 6.1 11 6.1 13.4 0l65.5-170.7z"
            />

            <path
              class="conf1"
              d="M131.5 172.6L196 343c2.3 6.1 11 6.1 13.4 0l6.7-17.5-53.6-152.9z"
            />

            <path
              class="conf2"
              d="M274.2 184.2c-1.8 1.8-4.2 2.9-7 2.9l-129.5.4c-5.4 0-9.8-4.4-9.8-9.8s4.4-9.8 9.9-9.9l129.5-.4c5.4 0 9.8 4.4 9.8 9.8 0 2.8-1.1 5.3-2.9 7z"
            />

            <polygon
              class="conf3"
              points="231.5 285.4 174.2 285.5 143.8 205.1 262.7 204.7"
            />

            <path
              class="conf4"
              d="M166.3 187.4l-28.6.1c-5.4 0-9.8-4.4-9.8-9.8s4.4-9.8 9.9-9.9l24.1-.1s-2.6 5-1.3 10.6c1.2 6 5.7 9.1 5.7 9.1z"
            />

            <ellipse class="conf2" cx="233.9" cy="224" rx="5.6" ry="5.6" />

            <path
              class="conf5"
              d="M143.8 205.1l5.4 14.3c6.8-2.1 14.4-.5 19.7 4.8 7.7 7.7 7.6 20.1-.1 27.8-1.7 1.7-3.7 3-5.8 4l11.1 29.4 27.7 0-28-80.5z"
            />

            <path
              class="conf2"
              d="M169 224.2c-5.3-5.3-13-6.9-19.7-4.8l13.9 36.7c2.1-1 4.1-2.3 5.8-4 7.6-7.7 7.6-20.2 0-27.9z"
            />

            <ellipse class="conf6" cx="207.4" cy="254.3" rx="11.3" ry="11.2" />
          </g>

          <circle class="conf2" id="b1" cx="195.2" cy="232.6" r="5.1" />
          <circle class="conf0" id="b2" cx="230.8" cy="219.8" r="5.4" />
          <circle class="conf0" id="c2" cx="178.9" cy="160.4" r="4.2" />
          <circle class="conf6" id="d2" cx="132.8" cy="123.6" r="5.4" />
          <circle class="conf0" id="d3" cx="151.9" cy="105.1" r="5.4" />

          <path
            class="conf0"
            id="d1"
            d="M129.9 176.1l-5.7 1.3c-1.6.4-2.2 2.3-1.1 3.5l3.8 4.2c1.1 1.2 3.1.8 3.6-.7l1.9-5.5c.4-1.6-1-3.2-2.5-2.8z"
          />

          <path
            class="conf6"
            id="b5"
            d="M284.5 170.7l-5.4 1.2c-1.5.3-2.1 2.2-1 3.3l3.6 3.9c1 1.1 2.9.8 3.4-.7l1.8-5.2c.5-1.3-.8-2.8-2.4-2.5z"
          />

          <circle class="conf6" id="c3" cx="206.7" cy="144.4" r="4.5" />

          <path
            class="conf2"
            id="c1"
            d="M176.4 192.3h-3.2c-1.6 0-2.9-1.3-2.9-2.9v-3.2c0-1.6 1.3-2.9 2.9-2.9h3.2c1.6 0 2.9 1.3 2.9 2.9v3.2c0 1.6-1.3 2.9-2.9 2.9z"
          />

          <path
            class="conf2"
            id="b4"
            d="M263.7 197.4h-3.2c-1.6 0-2.9-1.3-2.9-2.9v-3.2c0-1.6 1.3-2.9 2.9-2.9h3.2c1.6 0 2.9 1.3 2.9 2.9v3.2c0 1.6-1.3 2.9-2.9 2.9z"
          />

          <path
            id="yellow-strip-1"
            d="M179.7 102.4s6.6 15.3-2.3 25-24.5 9.7-29.7 15.6-.7 18.6 3.7 28.2 2.2 23-10.4 28.2"
          />

          <path
            class="conf8"
            id="yellow-strip-2"
            d="M252.2 156.1s-16.9-3.5-28.8 2.4-14.9 17.8-16.4 29-4.3 28.8-31.5 33.4"
          />

          <path
            class="conf0"
            id="a1"
            d="M277.5 254.8h-3.2c-1.6 0-2.9-1.3-2.9-2.9v-3.2c0-1.6 1.3-2.9 2.9-2.9h3.2c1.6 0 2.9 1.3 2.9 2.9v3.2c0 1.6-1.3 2.9-2.9 2.9z"
          />

          <path
            class="conf3"
            id="c4"
            d="M215.2 121.3c.3.6.8 1 1.5 1.1 1.6.2 2.2 2.2 1.1 3.3-.5.4-.7 1.1-.6 1.7.3 1.6-1.4 2.8-2.8 2-.6-.3-1.2-.3-1.8 0-1.4.7-3.1-.5-2.8-2 .1-.6-.1-1.3-.6-1.7-1.1-1.1-.5-3.1 1.1-3.3.6-.1 1.2-.5 1.5-1.1.7-1.5 2.7-1.5 3.4 0z"
          />

          <path
            class="conf3"
            id="b3"
            d="M224.5 191.7c.3.6.8 1 1.5 1.1 1.6.2 2.2 2.2 1.1 3.3-.5.4-.7 1.1-.6 1.7.3 1.6-1.4 2.8-2.8 2-.6-.3-1.2-.3-1.8 0-1.4.7-3.1-.5-2.8-2 .1-.6-.1-1.3-.6-1.7-1.1-1.1-.5-3.1 1.1-3.3.6-.1 1.2-.5 1.5-1.1.7-1.5 2.7-1.5 3.4 0z"
          />

          <path
            class="conf3"
            id="a2"
            d="M312.6 242.1c.3.6.8 1 1.5 1.1 1.6.2 2.2 2.2 1.1 3.3-.5.4-.7 1.1-.6 1.7.3 1.6-1.4 2.8-2.8 2-.6-.3-1.2-.3-1.8 0-1.4.7-3.1-.5-2.8-2 .1-.6-.1-1.3-.6-1.7-1.1-1.1-.5-3.1 1.1-3.3.6-.1 1.2-.5 1.5-1.1.7-1.5 2.7-1.5 3.4 0z"
          />

          <path
            class="conf8"
            id="yellow-strip-3"
            d="M290.7 215.4s-14.4-3.4-22.6 2.7-8.2 23.3-17.1 29.4-19.8-2.7-32.2-4.1-19.2 5.5-20.5 10.9"
          />
        </svg>
      </div>
    </>
  );
}

export default Home;
