import React from "react";

import { useDispatch } from "react-redux";
import { deleteCart } from "../redux/actions/carts";
import { useHistory } from "react-router-dom";

// import EditIcon from "../assets/icons/edit.svg";
import DeleteIcon from "../assets/icons/delete.svg";

export default function CartItemCard(props) {
  let history = useHistory();
  const dispatch = useDispatch();

  const deleteItem = (data) => {
    // console.log(e);
    dispatch(deleteCart(data));
  };

  // const editItem = (e) => {
  //   // console.log(e);
  //   history.push(`/cart/${e}/edit`);
  // };

  const checkProps = () => {
    if (props) {
      if (props?.cart?.arts[0]?.item === "T-shirt") {
        return `${props?.cart?.art_title} ${props?.cart?.arts[0]?.item} ${props?.cart?.arts[0]?.color} x ${props?.cart?.arts[0]?.quantity}`;
      } else {
        return `${props?.cart?.art_title} ${props?.cart?.arts[0]?.item} x ${props?.cart?.arts[0]?.quantity}`;
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
                src={props?.cart?.image_product}
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
                }).format(props?.cart.gross_amount)}
              </p>
            </div>
            <div className="col-3">
              <div className="row">
                {/* <div className="col-6 px-1 text-center">
                  <img
                    onClick={() => editItem(props?.cart?.arts[0].id)}
                    src={EditIcon}
                    alt="edit-icon"
                    width={25}
                    height={25}
                  />
                </div> */}
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
