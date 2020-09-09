import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div classHome="home">
      <div classHome="home__container">
        <img
          className="home__image"
          src="https://www.aalogics.com/sites/default/files/amazon-web-services-banner.png"
          alt=""
        />

        <div className="home__row">
          <Product
            id={0}
            title="Samsung Galaxy S10 Series | Upto Rs 26000 off"
            price={(49, 999.0)}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/619jtWsN0cL._SY606_.jpg"
            }
            rating={4}
          />
          <Product
            id={1}
            title="HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait & Landscape, Tilt, and HDMI & VGA Ports (1KL30AA) - Black"
            price={109.99}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/71trhuzbhML._AC_SL1500_.jpg"
            }
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id={2}
            title="TP-Link AC1750 Smart WiFi Router - Dual Band Gigabit Wireless Internet Router for Home, Works with Alexa, VPN Server, Parental Control&QoS (Archer A7)"
            price={62.64}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/51MsvuD7iOL._SL1020_.jpg"
            }
            rating={5}
          />
          <Product
            id={3}
            title="AMD Ryzen 7 3700X 8-Core, 16-Thread Unlocked Desktop Processor with Wraith Prism LED Cooler"
            price={299.99}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/51wpN1SESrL.jpg"
            }
            rating={5}
          />
          <Product
            id={4}
            title="1080P Webcam with Microphone"
            price={34.99}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/71zEiQWAUoL._AC_SL1500_.jpg"
            }
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id={5}
            title="Sceptre 35 Inch Curved UltraWide 21: 9 LED Creative Monitor QHD 3440x1440 Frameless AMD Freesync HDMI DisplayPort Up to 100Hz, Machine Black 2020 (C355W-3440UN)"
            price={379.97}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/817TtPObqrL._AC_SX466_.jpg"
            }
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
