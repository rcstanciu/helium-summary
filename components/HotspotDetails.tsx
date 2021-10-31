import React from "react";
import { useGetHotspot } from "../hooks/queries";
import Card from "./Card";

interface Props {
  address: string;
}

const HotspotDetails = ({ address }: Props): JSX.Element => {


  const { data } = useGetHotspot({ address });

  return (
    <div className="flex flex-row py-12">
      <Card>
        <p className="text-xs text-gray-400"> Address</p>
        <p className="overflow-ellipsis overflow-hidden text-gray-50">
          {address}
        </p>
      </Card>

      <Card>
        <p className="text-xs text-gray-400">Name</p>
        <p className="overflow-ellipsis overflow-hidden text-gray-50">
          {data?.data?.data?.name}
        </p>
      </Card>
      <Card>
        <p className="text-xs text-gray-400">Owner</p>
        <p className="overflow-ellipsis overflow-hidden text-gray-50">
          {data?.data?.data?.owner}
        </p>
      </Card>
    </div>
  );
};

export default HotspotDetails;
