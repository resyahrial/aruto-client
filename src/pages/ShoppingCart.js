import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { CartItemCard } from "../components";
import { checkout, paid } from "../redux/actions/transactions";
import { clearCart } from "../redux/actions/carts";

export default function ShoppingCart() {
  const [payload, setPayload] = useState({
    address: "",
    gross_amount: 0,
  });
  const [subTotal, setSubTotal] = useState(0);
  const { data, isLoading } = useSelector((state) => state.transactions);
  const carts = useSelector((state) => state.carts.data);
  const dispatch = useDispatch();
  const history = useHistory();

  if (!localStorage.access_token) {
    history.push("/login");
  }

  const shippingFee = carts?.length === 0 ? 0 : 50000;

  const checkoutCarts = () => {
    const arts = carts.map((cart) => {
      const { id, item, size, color, position, quantity } = cart;
      return { id, item, size, color, position, quantity };
    });

    dispatch(
      checkout({
        ...payload,
        arts,
        gross_amount: subTotal + shippingFee,
      })
    );
  };

  const payHandler = () => {
    window.snap.pay(data.transactionToken, {
      onSuccess: function (result) {
        dispatch(paid(data.transactionId));
        dispatch(clearCart());
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

  useEffect(() => {
    setSubTotal(carts.reduce((acc, cart) => acc + cart.totalPrice, 0));
  }, [carts]);

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
            <div className="col-lg-4 border p-3">
              <div className="form-group row">
                <div className="col-3 d-flex align-items-center">
                  <label className="mb-0">Address</label>
                </div>
                <div className="col-9">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Input Your Address Here"
                    onChange={(ev) =>
                      setPayload({ ...payload, address: ev.target.value })
                    }
                    value={payload.address}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <p>Trans-ID</p>
                </div>
                <div className="col-8">
                  <p className="text-right">{data?.transactionId || "-"}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <p>Subtotal</p>
                </div>
                <div className="col-6 text-right">
                  <p>
                    {new Intl.NumberFormat("id-Rp", {
                      style: "currency",
                      currency: "IDR",
                    }).format(subTotal)}
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <p>Shipment</p>
                </div>
                <div className="col-6 text-right">
                  <p>
                    {new Intl.NumberFormat("id-Rp", {
                      style: "currency",
                      currency: "IDR",
                    }).format(shippingFee)}
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <p>Total Price</p>
                </div>
                <div className="col-6 text-right">
                  <p>
                    {new Intl.NumberFormat("id-Rp", {
                      style: "currency",
                      currency: "IDR",
                    }).format(subTotal + shippingFee)}
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-baseline">
                {!data.transactionToken && (
                  <button
                    type="button"
                    className="btn btn-secondary btn-add btn-pay"
                    onClick={checkoutCarts}
                    disabled={carts.length === 0 || payload.address === ""}
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
        </div>
      </section>
    </>
  );
}
