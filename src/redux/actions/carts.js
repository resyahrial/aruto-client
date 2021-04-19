import axios from "../axios";

export const setToCart = (payload) => (dispatch, getState) => {
  const state = getState().carts.data;
  let isExist = state.find(
    (item) =>
      item.arts[0].id === payload.arts[0].id &&
      item.arts[0].item === payload.arts[0].item
  );

  console.log(isExist);

  if (isExist) {
    console.log("Already on Cart");
  } else {
    dispatch({ type: "carts/add", payload });
  }
};

export const deleteCart = (payload) => (dispatch, getState) => {
  const state = getState().carts.data;

  console.log(state);
  console.log(payload);
  let deleteItem = state.filter(
    (itemData) =>
      itemData.arts[0].id !== payload.arts[0].id ||
      itemData.arts[0].item !== payload.arts[0].item
  );
  dispatch({ type: "carts/deleteItem", payload: deleteItem });
};

export const editCart = (payload) => (dispatch, getState) => {
  const state = getState().carts.data;
  console.log(state);
  console.log(payload);
  console.log(state.indexOf(payload));
};

// export const fetchArts = (payload) => (dispatch) => {
// code
// };

//   console.log(isExist);
//   console.log(payload);

//   if (isExist) {
//     if (
//       isExist?.arts[0]?.item === "T-shirt" &&
//       payload.arts[0].item === "T-shirt"
//     ) {
//       // Swal Alert Here
//       console.log("Item Already on Cart");
//     } else if (
//       isExist?.arts[0]?.item === "Artboard" &&
//       payload.arts[0].item === "Artboard"
//     ) {
//       console.log("Item Already on Cart");
//     } else {
//       dispatch({ type: "carts/add", payload });
//     }
//   } else {
//     dispatch({ type: "carts/add", payload });
//   }
//   console.log(payload.arts[0].id);
//   console.log(state[0].arts[0].id);
// Ada yang sama di cart
// let isTshirt = isExist.arts[0].item === "T-shirt";
// let isArtboard = isExist.arts[0].item === "Artboard";
// let updateItem = {
//   arts: [
//     {
//       size: isExist.arts[0].size,
//       color: isExist.arts[0].color,
//       quantity: isExist.arts[0].quantity,
//     },
//   ],
// };
// dispatch({ type: "carts/updateItem", payload: updateItem });
//   console.log(updateItem);

//   let updateItem = {
//     arts: [
//       {
//         id: isExist.arts[0].id,
//         size: isExist.arts[0].size,
//         color: isExist.arts[0].color,
//         position: isExist.arts[0].position,
//         quantity: isExist.arts[0].quantity,
//       },
//     ],
//     gross_amount: isExist.gross_amount,
//     image_product: isExist.gross_amount,
//     art_title: isExist.gross_amount,
//   };
//   console.log(updateItem);
