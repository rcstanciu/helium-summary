import React from "react";
import { useGetAccount, useGetHotspot } from "../hooks/queries";

interface Props {
  address: string;
}

const AccountDetails = ({ address }: Props): JSX.Element => {
  const { data } = useGetAccount({ address });

  return (
    <div className="columns is-centered has-text-centered">
      <div className="column is-narrow">
        <p className="has-text-grey-light">account address</p>
        <p className="ellipsis">{address}</p>
      </div>
      <div className="column is-narrow">
        <p className="has-text-grey-light">account balance</p>
        <p className="ellipsis">
          {data?.data && `${data?.data?.data?.balance / 10 ** 8}`}{" "}
          <span className="has-text-grey-light">HNT</span>
        </p>
      </div>
    </div>
  );
};

export default AccountDetails;
