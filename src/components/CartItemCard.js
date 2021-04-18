import React from "react";

import EditIcon from "../assets/icons/edit.svg";
import DeleteIcon from "../assets/icons/delete.svg";

export default function CartItemCard() {
  return (
    <>
      <div>
        <div className="col pb-3">
          <div className="row">
            <div className="col-3">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbMuA0_YFVUsJpY5hMxgYvTDYC-xMMn1HV9g&usqp=CAU"
                alt="cart"
                className="item-cart"
              />
            </div>
            <div className="col-3">
              <p>Splash Art White T-Shirt x 3</p>
            </div>
            <div className="col-3 text-center">
              <p>Rp 450.000</p>
            </div>
            <div className="col-3">
              <div className="row">
                <div className="col-6 px-1 text-center">
                  <img src={EditIcon} alt="logo" width={25} height={25} />
                </div>
                <div className="col-6 px-1 text-center">
                  <img src={DeleteIcon} alt="logo" width={25} height={25} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
