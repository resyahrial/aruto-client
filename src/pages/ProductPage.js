import React, { useEffect, useState } from "react";
import { fabric } from "fabric";

import tShirt from "../assets/images/background_tshirt.png";
// import AnotherArtCard from "../components/AnotherArtCard";
// import domtoimage from "dom-to-image";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchArtsById } from "../redux/actions/arts";
import { setToCart } from "../redux/actions/carts";

export default function ProductPage() {
   useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
  const params = useParams();
  const dispatch = useDispatch();
  const artById = useSelector((state) => state.arts.dataById);
  // const isLoading = useSelector((state) => state.arts.isLoading);
  // const error = useSelector((state) => state.arts.error);

  const [canvas, setCanvas] = useState("");
  const [tShirtColor, setTshirtColor] = useState("white");
  const [addArt, setAddArt] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Artboard");
  const [selectedSize, setSelectedSize] = useState("XS");
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  // const [refTshirt] = useState(React.createRef());
  // const [createdImage, setCreatedImage] = useState("");
  // const [logo, setLogo] = useState(false);
  // const [img, setImg] = useState("Insert Your Image URL for Custom development");
  // const [parsedImg, setParsedImg] = useState("");

  useEffect(() => {
    dispatch(fetchArtsById(params.id));
    setCanvas(tShirtCanvas());

    // if (!canvas._object) {
    //   setLogo(true);
    // }
  }, [dispatch, params.id]);

  // console.log(artById);

  // if (artById?.image_url) {
  //   toDataURL(parsedImg, function (dataUrl) {
  //     setParsedImg(dataUrl);
  //   });
  // }

  // function toDataURL(url, callback) {
  //   let xhr = new XMLHttpRequest();
  //   xhr.onload = function () {
  //     let reader = new FileReader();
  //     reader.onloadend = function () {
  //       callback(reader.result);
  //     };
  //     reader.readAsDataURL(xhr.response);
  //   };
  //   xhr.open("GET", url);
  //   xhr.responseType = "blob";
  //   xhr.send();
  // }

  const tShirtCanvas = () =>
    new fabric.Canvas("tshirt-canvas", {
      height: 400,
      width: 200,
    });

  // const node = refTshirt.current;

  const addToCart = () => {
    // domtoimage
    //   .toPng(node)
    //   .then(function (dataUrl) {
    //     console.log(dataUrl);
    //     let img = new Image();
    //     img.crossOrigin = "Anonymous";
    //     img.src = dataUrl;
    //     setCreatedImage(dataUrl);
    //   })
    //   .catch(function (error) {
    //     console.error("oops, something went wrong!", { error });
    //   });
    let itemSelected;

    if (selectedItem === "Artboard") {
      itemSelected = {
        arts: [
          {
            id: params.id,
            item: selectedItem,
            size: "",
            color: "",
            position: canvas._offset,
            quantity: selectedQuantity,
          },
        ],
        gross_amount: +selectedQuantity * artById?.price * 0.75,
        image_product: artById?.image_url,
        art_title: artById?.title,
        address: "",
      };
      if (!selectedQuantity) {
        console.log("Quantity Can't be Empty");
      } else {
        // console.log("dispatch");
        // console.log(itemSelected);
        dispatch(setToCart(itemSelected));
      }
    } else {
      itemSelected = {
        arts: [
          {
            id: params.id,
            item: selectedItem,
            size: selectedSize,
            color: tShirtColor,
            position: canvas._offset,
            quantity: selectedQuantity,
          },
        ],
        gross_amount: +selectedQuantity * artById?.price,
        image_product: artById?.image_url,
        art_title: artById?.title,
        address: "",
      };
      if (!selectedQuantity || !selectedSize) {
        console.log("Quantity or Size Can't be Empty");
      } else {
        // console.log(itemSelected);
        dispatch(setToCart(itemSelected));
      }
    }

    // console.log("Add to Cart");
  };

  const changeColor = (color) => {
    setTshirtColor(color);
  };

  const customPosition = () => {
    setAddArt(true);
    fabric.Image.fromURL(artById.image_url, function (myImg) {
      myImg.scaleToHeight(200);
      myImg.scaleToWidth(200);
      canvas.centerObject(myImg);
      canvas.add(myImg);
      canvas.renderAll();
    });
  };

  const selectItemSetter = (e) => {
    setTshirtColor("white");
    setSelectedSize("XS");
    setSelectedQuantity(1);
    setSelectedItem(e.target.value);
  };

  const selectSize = (e) => {
    setSelectedSize(e.target.value);
  };

  const selectQuantity = (e) => {
    setSelectedQuantity(e.target.value);
  };

  return (
    <>
      <section id="product-page">
        <div className="container pt-5">
          <div className="row">
            <div className="col-lg-6 justify-content-center d-flex align-self-center py-3 border">
              {selectedItem === "Artboard" ? (
                <div
                  // ref={refTshirt}
                  id="artboard-div"
                  style={{ backgroundColor: tShirtColor }}
                  className="text-center pt-5"
                >
                  <img
                    id="tshirt-backgroundpicture"
                    src={artById?.image_url}
                    alt="Art"
                    className="image-art"
                  />
                  <div
                    id="drawingArea"
                    className="drawing-area"
                    style={{ opacity: 0 }}
                  >
                    <div className="canvas-container">
                      <canvas id="tshirt-canvas"></canvas>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  // ref={refTshirt}
                  id="tshirt-div"
                  style={{ backgroundColor: tShirtColor }}
                >
                  <img
                    id="tshirt-backgroundpicture"
                    src={tShirt}
                    alt="T-shirt"
                  />
                  <div id="drawingArea" className="drawing-area">
                    <div className="canvas-container">
                      <canvas id="tshirt-canvas"></canvas>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="col-lg-6">
              <div className="col-lg-12">
                <h2>{artById?.title}</h2>
                <h3 className="pb-3">Artist: {artById?.user?.username}</h3>
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
                    <select
                      onChange={selectItemSetter}
                      className="form-control"
                      defaultValue={selectedItem}
                    >
                      <option disabled>Item</option>
                      <option value="Artboard">Art Board</option>
                      <option value="T-shirt">T-shirt</option>
                    </select>
                  </div>
                  {selectedItem === "T-shirt" ? (
                    <div className="col-lg-3">
                      <select
                        onChange={selectSize}
                        className="form-control"
                        defaultValue={selectedSize}
                      >
                        <option disabled>Size</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                      </select>
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="col-lg-3">
                    <input
                      onChange={selectQuantity}
                      className="form-control"
                      type="number"
                      placeholder="Quantity"
                      value={selectedQuantity}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                {selectedItem === "Artboard" ? (
                  <>
                    <button
                      className="btn btn-primary"
                      onClick={customPosition}
                      style={{ opacity: 0 }}
                    >
                      Add Art
                    </button>
                    <div>
                      <p>Spec: Canvas, Size 60 x 80 </p>
                    </div>
                  </>
                ) : (
                  <button
                    className="btn btn-primary"
                    onClick={customPosition}
                    style={addArt ? { display: "none" } : { opacity: 1 }}
                  >
                    Add Art
                  </button>
                )}
              </div>
              {selectedItem === "T-shirt" ? (
                <div className="col-lg-12 pt-3">
                  <h5>Choose Color</h5>
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="pr-3">
                        <span
                          onClick={(e) => changeColor("white")}
                          className="dot dot-white"
                        ></span>
                      </div>
                      <div className="pr-3">
                        <span
                          onClick={(e) => changeColor("black")}
                          className="dot dot-black"
                        ></span>
                      </div>
                      <div className="pr-3">
                        <span
                          onClick={(e) => changeColor("red")}
                          className="dot dot-red"
                        ></span>
                      </div>
                      <div className="pr-3">
                        <span
                          onClick={(e) => changeColor("green")}
                          className="dot dot-green"
                        ></span>
                      </div>
                      <div className="pr-3">
                        <span
                          onClick={(e) => changeColor("yellow")}
                          className="dot dot-yellow"
                        ></span>
                      </div>
                      <div className="pr-3">
                        <span
                          onClick={(e) => changeColor("blue")}
                          className="dot dot-blue"
                        ></span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="pt-3">Spec: Cotton Combed 80s</p>
                  </div>
                </div>
              ) : (
                ""
              )}

              <div className="col-lg-12 pt-3">
                <h5>Price</h5>
                <h6>
                  {selectedItem === "Artboard"
                    ? new Intl.NumberFormat("id-Rp", {
                        style: "currency",
                        currency: "IDR",
                      }).format(artById?.price * 0.75)
                    : new Intl.NumberFormat("id-Rp", {
                        style: "currency",
                        currency: "IDR",
                      }).format(artById?.price)}
                </h6>
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
              {/* <h5>Another art you might like</h5>
              <div className="row">
                <AnotherArtCard />
                <AnotherArtCard />
                <AnotherArtCard />
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
