import React from "react";

import { CartItemCard } from "../components";

export default function ShoppingCart() {
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
                <CartItemCard />
                <CartItemCard />
                <CartItemCard />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="border">
                <div className="col pt-3">
                  <div className="row">
                    <div className="col-6">
                      <p>ID Transaction</p>
                    </div>
                    <div className="col-6 text-right">
                      <p>2021-04-17-4458</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="row">
                    <div className="col-6">
                      <p>Subtotal</p>
                    </div>
                    <div className="col-6 text-right">
                      <p>Rp 150.000</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="row">
                    <div className="col-6">
                      <p>Shipment</p>
                    </div>
                    <div className="col-6 text-right">
                      <p>Rp 50.000</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="row">
                    <div className="col-6">
                      <p>Total Price</p>
                    </div>
                    <div className="col-6 text-right">
                      <p>Rp 200.000</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-baseline">
                <button
                  type="button"
                  className="btn btn-primary btn-add btn-pay"
                >
                  Pay
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-8 pt-5">
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
          </div>
        </div>
      </section>
    </>
  );
}
