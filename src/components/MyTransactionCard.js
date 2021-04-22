import React from "react";

export default function MyTransactionCard({ history }) {
  console.log(history);

  return (
    <>
      <tr>
        <th scope="row">{history?.transaction?._id}</th>
        <td>
          <img
            className="img-trans"
            src={history?.artData?.image_url}
            alt="img"
          />
          <p>{history?.artData?.title}</p>
          {history?.transaction?.arts?.map((transaction, i) => {
            return (
              <p key={i}>
                {transaction.item} {transaction.color} x {transaction.quantity}
              </p>
            );
          })}
        </td>
        <td>{history?.transaction?.address}</td>
        <td>
          {new Intl.NumberFormat("id-Rp", {
            style: "currency",
            currency: "IDR",
          }).format(history?.transaction?.gross_amount)}
        </td>
        <td>{history?.transaction?.status}</td>
      </tr>
    </>
  );
}
