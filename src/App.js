import "./styles.css";
import { useEffect, useState } from "react";
import { quotes } from "./quotes.js";
import { color } from "./color.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const [randomNumber, setRandomNumber] = useState(0);
  const [randomColor1, setRandomColor1] = useState(0);
  const [randomColor2, setRandomColor2] = useState(1);
  const [randomDeg, setRandomDeg] = useState(45);

  const [quote, setQuote] = useState({
    author: "",
    text: ""
  });

  const updateNumber = () => {
    setRandomNumber(Math.floor(Math.random() * quotes.length));
  };

  const updateColor1 = () => {
    setRandomColor1(Math.floor(Math.random() * color.length));
  };

  const updateColor2 = () => {
    setRandomColor2(Math.floor(Math.random() * color.length));
  };

  const updateDeg = () => {
    setRandomDeg(Math.floor(Math.random() * 180));
  };

  const newQuote = () => {
    updateNumber();
    updateColor1();
    updateColor2();
    updateDeg();
    setQuote(() => {
      return {
        author: quotes[randomNumber].author,
        text: quotes[randomNumber].text
      };
    });
  };

  useEffect(() => {
    newQuote();
    // eslint-disable-next-line
  }, []);

  const person = quote.author;
  const famousQuote = quote.text;

  const deg = randomDeg + "deg";
  const gradient =
    "linear-gradient(" +
    deg +
    "," +
    color[randomColor1] +
    "," +
    color[randomColor2] +
    ")";

  const regEx = / /g;
  const twitterQuote = '"' + quote.text + '" - ' + quote.author;
  const twitterUrl = twitterQuote.replace(regEx, "%20");
  const hashtags = "quotes,life";
  const twitterLink =
    "https://twitter.com/intent/tweet?hashtags=" +
    hashtags +
    "&text=" +
    twitterUrl;

  return (
    <body className="body" style={{ background: gradient }} id="quote-box">
      <div className="container">
        <div>
          <h1 id="text">{famousQuote}</h1>
          <div className="containerAuthor">
            <p className={`${"bold"} ${"italic"} ${"upperCase"}`} id="author">
              {person}
            </p>
          </div>
        </div>

        <div className="containerBottom">
          <div className="containerSocial">
            <a
              href={twitterLink}
              target="_blank"
              rel="noreferrer"
              id="tweet-quote"
            >
              <h3>
                <FontAwesomeIcon icon={faRetweet} />
              </h3>
            </a>
            {/* <h3><FontAwesomeIcon icon={faTwitter} /></h3> */}
          </div>
          <button
            onClick={newQuote}
            className={`${"bold"} ${"upperCase"}`}
            id="new-quote"
          >
            New Quote
          </button>
        </div>
      </div>
      <div className={`${"bold"} ${"italic"}`}>by pengpengpong</div>
    </body>
  );
}
