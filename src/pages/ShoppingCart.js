import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { CartItemCard } from "../components";
import { checkout, paid } from "../redux/actions/transactions";

export default function ShoppingCart() {
  const { data, isLoading } = useSelector((state) => state.transactions);
  const [address, setAddress] = useState("");
  const carts = useSelector((state) => state.carts.data);
  const dispatch = useDispatch();
  const history = useHistory();
  const shippingFee = carts?.length === 0 ? 0 : 50000;

  // console.log(carts);
  const setterAddress = (e) => {
    setAddress(e.target.value);
  };

  const payHandler = () => {
    window.snap.pay(data.transactionToken, {
      onSuccess: function (result) {
        dispatch(paid(data.transactionId));
        if (!isLoading) history.push("/success");
      },
      onPending: function (result) {
        console.log("Payment pending", result);
      },
      onError: function () {
        console.log("Payment error");
      },
    });
  };

  useEffect(() => {
    if (data.transactionToken) {
      const snapUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
      const clientKey = data.clientKey;

      const scriptTag = document.createElement("script");
      scriptTag.src = snapUrl;
      scriptTag.setAttribute("data-client-key", clientKey);

      document.body.appendChild(scriptTag);
    }
  }, [data]);

  const totalPrice = () => {
    let sum = 0;
    carts.forEach((cart) => {
      sum += cart.gross_amount;
    });
    return sum;
  };

  if(isLoading) {
    return(
      <div class="text-center">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    )
  }

  return (
    <>
      <section id="shopping-cart">
        <div className="container pt-5">
          <div className="row">
            <div className="col-lg-8">
              <div className="border">
                <div className="col border-bottom mb-3 pt-2">
                  <div className="row">
                    <div className="col-3 text-center">
                      <h6>Image</h6>
                    </div>
                    <div className="col-3 text-center">
                      <h6>Product Name</h6>
                    </div>
                    <div className="col-3 text-center">
                      <h6>Price</h6>
                    </div>
                    <div className="col-3 text-center">
                      <h6>Action</h6>
                    </div>
                  </div>
                </div>
                {carts?.length === 0 ? (
                  <div>
                    <h3 className="text-center py-5">There's No Item to Buy</h3>
                  </div>
                ) : (
                  carts?.map((cart, i) => {
                    return <CartItemCard key={i} cart={cart} />;
                  })
                )}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="border">
                <div className="form-group pt-3">
                  <div className="row">
                    <div className="col-4 text-center">
                      <label>Address</label>
                    </div>
                    <div className="col-8 pr-4">
                      <input
                        onChange={setterAddress}
                        type="text"
                        className="form-control"
                        placeholder="Input Your Address Here"
                        value={address}
                      />
                    </div>
                  </div>
                </div>
                <div className="col pt-3">
                  <div className="row">
                    <div className="col-6">
                      <p>ID Transaction</p>
                    </div>
                    <div className="col-6 text-right">
                      <p>
                        {new Date().getFullYear()}-{new Date().getMonth()} -
                        {new Date().getDate()} - {new Date().getMilliseconds()}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="row">
                    <div className="col-6">
                      <p>Subtotal</p>
                    </div>
                    <div className="col-6 text-right">
                      <p>
                        {new Intl.NumberFormat("id-Rp", {
                          style: "currency",
                          currency: "IDR",
                        }).format(totalPrice())}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="row">
                    <div className="col-6">
                      <p>Shipment</p>
                    </div>
                    <div className="col-6 text-right">
                      <p>
                        {carts?.length === 0
                          ? new Intl.NumberFormat("id-Rp", {
                              style: "currency",
                              currency: "IDR",
                            }).format(0)
                          : new Intl.NumberFormat("id-Rp", {
                              style: "currency",
                              currency: "IDR",
                            }).format(shippingFee)}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="row">
                    <div className="col-6">
                      <p>Total Price</p>
                    </div>
                    <div className="col-6 text-right">
                      <p>
                        {new Intl.NumberFormat("id-Rp", {
                          style: "currency",
                          currency: "IDR",
                        }).format(totalPrice() + shippingFee)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-baseline">
                {!data.transactionToken && (
                  <button
                    type="button"
                    className="btn btn-secondary btn-add btn-pay"
                    onClick={() => dispatch(checkout())}
                  >
                    Checkout
                  </button>
                )}
                {data.transactionToken && (
                  <button
                    type="button"
                    className="btn btn-primary btn-add btn-pay"
                    onClick={payHandler}
                  >
                    Pay
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* <div className="col-lg-8 pt-5">
            <h4 className="pb-3">Buyer Information</h4>
            <form className="py-3">
              <div className="form-group pb-3">
                <div className="row">
                  <div className="col-4">
                    <label>Full Name</label>
                  </div>
                  <div className="col-8">
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="form-group pb-3">
                <div className="row">
                  <div className="col-4">
                    <label>Email address</label>
                  </div>
                  <div className="col-8">
                    <input type="email" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="form-group pb-3">
                <div className="row">
                  <div className="col-4">
                    <label>Mobile Number</label>
                  </div>
                  <div className="col-8">
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="form-group pb-3">
                <div className="row">
                  <div className="col-4">
                    <label>Address</label>
                  </div>
                  <div className="col-8">
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
            </form>
          </div> */}
        </div>
      </section>
    </>
  );
}
