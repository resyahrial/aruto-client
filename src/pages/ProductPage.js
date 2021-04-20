import React, { useEffect, useState } from "react";
import { fabric } from "fabric";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import tShirt from "../assets/images/background_tshirt.png";
import { fetchArtsById } from "../redux/actions/arts";
import { setToCart } from "../redux/actions/carts";

export default function ProductPage() {
   useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
  const params = useParams();
  const dispatch = useDispatch();
  const artById = useSelector((state) => state.arts.dataById);
  const carts = useSelector((state) => state.carts.data);
  const history = useHistory();

  const [cart, setCart] = useState({
    item: "Artboard",
    size: "XS",
    color: "white",
    position: "",
    quantity: 0,
    totalPrice: artById.price || 0,
  });
  const [canvas, setCanvas] = useState(null);
  const [isCanvasLoaded, setIsCanvasLoaded] = useState(false);

  const onChange = (ev, colorValue) => {
    if (ev.target.name) {
      const { name, value } = ev.target;
      setCart({
        ...cart,
        [name]: value,
        totalPrice: name === "quantity" ? value * artById.price : artById.price,
      });
    } else {
      setCart({
        ...cart,
        color: colorValue,
      });
    }
  };

  const addToCart = () => {
    const { _id, title, image_url } = artById;
    dispatch(
      setToCart({
        ...cart,
        id: _id,
        title,
        image_url,
        position: canvas
          ? canvas._offset
          : {
              top: 0,
              left: 0,
            },
      })
    );
    history.push("/cart");
  };

  useEffect(() => {
    dispatch(fetchArtsById(params.id));

    setCanvas(
      new fabric.Canvas("tshirt-canvas", {
        height: 400,
        width: 200,
      })
    );
  }, []);

  useEffect(() => {
    if (cart.item !== "Artboard" && !isCanvasLoaded) {
      fabric.Image.fromURL(artById.image_url, function (myImg) {
        myImg.scaleToHeight(200);
        myImg.scaleToWidth(200);
        canvas.centerObject(myImg);
        canvas.add(myImg);
        canvas.renderAll();
      });
      setIsCanvasLoaded(true);
    }
  }, [cart.item]);

  return (
    <>
      <section id="product-page">
        <div className="container pt-5">
          <div className="row">
            <div className="col-lg-6 justify-content-center d-flex py-3 border">
              {cart.item === "Artboard" ? (
                <div
                  id="artboard-div"
                  style={{ backgroundColor: cart.color }}
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
                <div id="tshirt-div" style={{ backgroundColor: cart.color }}>
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
                <h1 className="h2 font-weight-bold mb-1">{artById?.title}</h1>
                <h2 className="h6 font-weight-bold">
                  By:{" "}
                  <span className="text-muted font-weight-normal">
                    {artById?.user?.username}
                  </span>
                </h2>
                <p className="mt-3 font-weight-thin">{artById?.description}</p>
              </div>

              <div className="col-8">
                <div className="row">
                  <select
                    onChange={onChange}
                    className="form-control col-4"
                    value={cart.item}
                    name="item"
                  >
                    <option disabled>Item</option>
                    <option value="Artboard">Art Board</option>
                    <option value="T-shirt">T-shirt</option>
                  </select>
                  <div className="col-8">
                    <p
                      className="my-0 text-muted"
                      style={{ fontSize: "0.8rem" }}
                    >
                      Specification
                    </p>
                    <h6 className="mt-0 font-weight-bold">
                      {cart.item === "Artboard"
                        ? "Canvas, Size 60 x 80"
                        : "Cotton Combed 80s"}
                    </h6>
                  </div>
                </div>
              </div>

              {cart.item !== "Artboard" && (
                <div className="col-8">
                  <div className="row align-items-center">
                    <select
                      onChange={onChange}
                      className="form-control col-4"
                      value={cart.size}
                      name="size"
                    >
                      <option disabled>Size</option>
                      <option value="XS">XS</option>
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                      <option value="XXL">XXL</option>
                    </select>
                    <div className="col-8 d-flex justify-content-around">
                      {["white", "black", "red", "green", "yellow", "blue"].map(
                        (color, idx) => {
                          return (
                            <div
                              className="d-flex align-items-center justify-content-center"
                              key={idx}
                            >
                              <span
                                onClick={(ev) => onChange(ev, color)}
                                className={`dot dot-${color}`}
                              ></span>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                </div>
              )}

              <div className="col-8 my-2">
                <div className="row">
                  <input
                    onChange={onChange}
                    className="form-control col-4"
                    type="number"
                    name="quantity"
                    value={cart.quantity}
                  />
                  <div className="col-8">
                    <p
                      className="my-0 text-muted"
                      style={{ fontSize: "0.8rem" }}
                    >
                      Price
                    </p>
                    <h6 className="mt-0 font-weight-bold">
                      {new Intl.NumberFormat("id-Rp", {
                        style: "currency",
                        currency: "IDR",
                      }).format(cart.totalPrice)}
                    </h6>
                  </div>
                </div>
                <div className="row">
                  <button
                    onClick={addToCart}
                    type="button"
                    className="btn btn-primary btn-block"
                    disabled={
                      carts.filter((cart) => cart.id === params.id).length > 0
                    }
                  >
                    {carts.filter((cart) => cart.id === params.id).length > 0
                      ? "Already on your carts"
                      : "Add To Cart"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
