import React from "react";

import { useDispatch } from "react-redux";
import { deleteCart } from "../redux/actions/carts";

import DeleteIcon from "../assets/icons/delete.svg";

export default function CartItemCard(props) {
  const dispatch = useDispatch();

  const deleteItem = (data) => {
    dispatch(deleteCart(data));
  };

  const checkProps = () => {
    if (props) {
      if (props.cart?.item === "T-shirt") {
        const { title, item, color, quantity } = props.cart;
        return `${title} ${item} ${color} x ${quantity}`;
      } else {
        const { title, item, quantity } = props.cart;
        return `${title} ${item} x ${quantity}`;
      }
    } else {
      return "";
    }
  };

  return (
    <>
      <div>
        <div className="col pb-3">
          <div className="row">
            <div className="col-3">
              <img
                src={props?.cart?.image_url}
                alt="cart"
                className="item-cart"
              />
            </div>
            <div className="col-3">
              <p>{checkProps()}</p>
            </div>
            <div className="col-3 text-center">
              <p>
                {new Intl.NumberFormat("id-Rp", {
                  style: "currency",
                  currency: "IDR",
                }).format(props?.cart.totalPrice)}
              </p>
            </div>
            <div className="col-3">
              <div className="row">
                <div className="col-12 px-1 text-center">
                  <img
                    onClick={() => deleteItem(props?.cart)}
                    src={DeleteIcon}
                    alt="delete-icon"
                    width={25}
                    height={25}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
