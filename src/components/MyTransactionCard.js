import React from "react";

export default function MyTransactionCart({ history }) {
  console.log(history);

  return (
    <>
      <tr>
        <th scope="row">{history._id}</th>
        <td>
          {history.arts.map((transaction) => {
            return (
              <p>
                {transaction.item} {transaction.color} x {transaction.quantity}
              </p>
            );
          })}
        </td>
        <td>{history.address}</td>
        <td>
          {new Intl.NumberFormat("id-Rp", {
            style: "currency",
            currency: "IDR",
          }).format(history.gross_amount)}
        </td>
        <td>{history.status}</td>
      </tr>
    </>
  );
}
