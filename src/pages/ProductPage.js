import React, { useEffect, useState } from "react";
import { fabric } from "fabric";
import tShirt from "../assets/images/background_tshirt.png";
import AnotherArtCard from "../components/AnotherArtCard";
import domtoimage from "dom-to-image";
import Footer from "../components/Footer";

export default function ProductPage() {
  const [canvas, setCanvas] = useState("");
  const [tShirtColor, setTshirtColor] = useState("#fff");
  const [refTshirt] = useState(React.createRef());
  const [createdImage, setCreatedImage] = useState("");
  const [logo, setLogo] = useState(false);
  const [img, setImg] = useState(
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/90da6c6e-f7bc-4624-aa35-f8260d9eec89/deembtl-89867fac-83e1-4f54-bd11-fd06bc02aedf.jpg/v1/fill/w_1280,h_960,q_75,strp/the_great_duchess_by_ayuana_deembtl-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD05NjAiLCJwYXRoIjoiXC9mXC85MGRhNmM2ZS1mN2JjLTQ2MjQtYWEzNS1mODI2MGQ5ZWVjODlcL2RlZW1idGwtODk4NjdmYWMtODNlMS00ZjU0LWJkMTEtZmQwNmJjMDJhZWRmLmpwZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.TvojkHp0fOaWpxz7oUf2QdcyKK2Fe3AMDjzLx8AxmOM"
  );
  const [parsedImg, setParsedImg] = useState("");

  useEffect(() => {
    setCanvas(tShirtCanvas());
    if (!canvas._object) {
      setLogo(true);
    }

    toDataURL(img, function (dataUrl) {
      setParsedImg(dataUrl);
    });

    if (logo && parsedImg) {
      fabric.Image.fromURL(parsedImg, function (myImg) {
        myImg.scaleToHeight(200);
        myImg.scaleToWidth(200);
        canvas.centerObject(myImg);
        canvas.add(myImg);
        canvas.renderAll();
      });
    }
  }, [logo, parsedImg]);

  function toDataURL(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
      let reader = new FileReader();
      reader.onloadend = function () {
        callback(reader.result);
      };
      reader.readAsDataURL(xhr.response);
    };
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.send();
  }

  const tShirtCanvas = () =>
    new fabric.Canvas("tshirt-canvas", {
      height: 400,
      width: 200,
    });

  const node = refTshirt.current;

  const addToCart = () => {
    domtoimage
      .toPng(node)
      .then(function (dataUrl) {
        console.log(dataUrl);
        let img = new Image();
        img.crossOrigin = "anonymous";
        img.src = dataUrl;
        setCreatedImage(dataUrl);
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", { error });
      });
  };

  const changeColor = (color) => {
    setTshirtColor(color);
  };

  return (
    <>
      <section id="product-page">
        <div className="container pt-5">
          <div className="row">
            <div className="col-lg-6 justify-content-center d-flex py-3 border">
              <div
                ref={refTshirt}
                id="tshirt-div"
                style={{ backgroundColor: tShirtColor }}
              >
                <img id="tshirt-backgroundpicture" src={tShirt} alt="T-shirt" />
                <div id="drawingArea" className="drawing-area">
                  <div className="canvas-container">
                    <canvas id="tshirt-canvas"></canvas>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="col-lg-12">
                <h2>Splash Art</h2>
                <h3 className="pb-3">Artist: Daniel W.</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  et diam eu turpis congue posuere. Integer lacinia lectus nibh,
                  id aliquet diam bibendum ut. Nullam euismod a nunc vitae
                  iaculis. Quisque dui nibh, congue eu metus et, hendrerit
                  convallis magna. Ut condimentum porttitor mattis. Donec ac
                  massa odio. Ut volutpat, nisi auctor laoreet consequat, dui
                  leo hendrerit nulla, sit amet pretium tellus lorem in dolor.
                  Donec viverra fringilla mauris ac ullamcorper. Vivamus
                  tincidunt aliquam lacus at pulvinar. Aliquam ac tellus ut elit
                  efficitur fringilla.
                </p>
              </div>
              <div className="col-lg-12 py-3">
                <div className="row">
                  <div className="col-lg-3">
                    <select className="form-control">
                      <option disabled>Size</option>
                      <option>XS</option>
                      <option>S</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                      <option>XXL</option>
                    </select>
                  </div>
                  <div className="col-lg-3">
                    <input
                      className="form-control"
                      type="number"
                      placeholder="Quantity"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-12 pt-3">
                <h5>Choose Color</h5>
                <div className="col-lg-12">
                  <div className="row">
                    <div className="pr-3">
                      <span
                        onClick={(e) => changeColor("#fff")}
                        className="dot dot-white"
                      ></span>
                    </div>
                    <div className="pr-3">
                      <span
                        onClick={(e) => changeColor("#000")}
                        className="dot dot-black"
                      ></span>
                    </div>
                    <div className="pr-3">
                      <span
                        onClick={(e) => changeColor("#f00")}
                        className="dot dot-red"
                      ></span>
                    </div>
                    <div className="pr-3">
                      <span
                        onClick={(e) => changeColor("#008000")}
                        className="dot dot-green"
                      ></span>
                    </div>
                    <div className="pr-3">
                      <span
                        onClick={(e) => changeColor("#ff0")}
                        className="dot dot-yellow"
                      ></span>
                    </div>
                    <div className="pr-3">
                      <span
                        onClick={(e) => changeColor("#0000ff")}
                        className="dot dot-blue"
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 pt-3">
                <h5>Price</h5>
                <h6>Rp 150.000,-</h6>
              </div>
              <div className="col-lg-12 py-3">
                <button
                  onClick={addToCart}
                  type="button"
                  className="btn btn-primary"
                >
                  Add To Cart
                </button>
              </div>
            </div>
            <div className="col-lg-6 pt-3">
              <h5>Another art you might like</h5>
              <div className="row">
                <AnotherArtCard />
                <AnotherArtCard />
                <AnotherArtCard />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
