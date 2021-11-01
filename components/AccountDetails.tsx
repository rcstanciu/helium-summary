import React from "react";
import { useGetAccount, useGetHotspot } from "../hooks/queries";
import Card from "./Card";

interface Props {
  address: string;
}

const AccountDetails = ({ address }: Props): JSX.Element => {
  const { data } = useGetAccount({ address });

  return (
    <div className="flex flex-row pt-12 pb-6">
      <Card>
        <p className="text-xs text-gray-400"> Address</p>
        <p className="overflow-ellipsis overflow-hidden text-gray-50">
          {address}
        </p>
      </Card>
      <Card>
        <p className="text-xs text-gray-400">Balance</p>
        <p className="overflow-ellipsis overflow-hidden text-gray-50">
          {data?.data && `${data?.data?.data?.balance / 10 ** 8} HNT`}
        </p>
      </Card>
    </div>
  );
};

export default AccountDetails;
