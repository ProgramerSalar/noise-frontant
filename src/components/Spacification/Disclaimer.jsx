import React from "react";

const Disclaimer = ({ name }) => {
  return (
    <div className="disclaimer-container">
      <h2 className="disclaimer-heading">Disclimer</h2>
      <div className="colo-one">
        <p>
          1.Prices are subject to change without prior notice. (Special discount
          prices are valid for a limited time period)
        </p>
        <p>
          2.The quality of bass and loudness is subjective and may vary from
          person to person.
        </p>
        <p>
          3.Up to 50 hours of playtime depends on factors such as music genre,
          and sound volume.
        </p>
        <p>
          4.The earphones have an IPX5 water-resistant rating. However, the
          earphones need to be dried completely before the next usage.
        </p>
        <p>
          5.Actual products may differ slightly in appearance from the
          illustrations/pictures provided.
        </p>
        <p>
          Lucky for you, India’s no. 1 smartwatch brand has everything covered.
          Noise smart watches come with a comprehensive suite of features to
          enhance daily living. Along with a stellar design, our products are
          well suited for the daily needs of both Android and Apple users. Among
          the best smart watches in India, make your selection by exploring our
          complete collection at the earliest.
        </p>
      </div>
      <div className="col-two">
        <div className="para-section">
          <h5 className="desclaimer-question">Buy Noise {name} Online</h5>
          <p className="desclaimer-answer">
            Explore the cutting-edge realm of audio technology by purchasing
            Noise {name} online, promising an unmatched auditory experience that
            redefines excellence.
          </p>
        </div>
        <div className="para-section">
          <h5 className="desclaimer-question">
            Why you should choose Noise {name}
          </h5>
          <p className="desclaimer-answer">
            Immerse yourself in sophistication with a premium chrome finish and
            a variety of colours, ensuring not just exceptional sound quality,
            but also a visual feast for the senses. The 12.4mm (PEEK + TITANIUM)
            drivers deliver an unparalleled audio experience, marked by crisp
            and well-balanced sound. Bid farewell to external disruptions with
            Adaptive ANC (up to 50dB), providing a seamless listening experience
            whether you're indoors or out. The Sound+ calling algorithm ensures
            dialled-up clarity during calls, eliminating interruptions and
            echoes. Enjoy simplified sound control through in-ear detection,
            seamlessly integrating into your daily routine. With up to 50 hours
            of playtime and Instacharge™, these earbuds assure uninterrupted
            musical bliss. Equipped with low latency (up to 50ms), Hyper Sync™,
            BT v5.3, and IPX5 water resistance, Noise {name} offers a
            power-packed setlist that thrives in any environment.
          </p>
        </div>
        <div className="para-section">
          <h5 className="desclaimer-question">
            Shop Noise {name} online in India
          </h5>
          <p className="desclaimer-answer">
            Embrace the future of audio technology, where style seamlessly meets
            substance, and innovation caters to every conceivable listening
            need. Elevate your auditory experience with the revolutionary Noise
            {name}.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
