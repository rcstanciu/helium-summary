import React from "react";
import { useGetHotspot } from "../hooks/queries";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
interface Props {
  address: string;
}

const HotspotDetails = ({ address }: Props): JSX.Element => {
  const { data } = useGetHotspot({ address });

  return (
    <div className="columns is-centered has-text-centered">
      <div className="column is-4">
        <p className="has-text-grey-light">address</p>
        <p className="ellipsis">{address}</p>
      </div>

      <div className="column is-4">
        <p className="has-text-grey-light">name</p>
        <p className="ellipsis">{data?.data?.data?.name}</p>
      </div>
      <div className="column is-4">
        <Link href={`/account/${encodeURIComponent(data?.data?.data?.owner)}`}>
          <a>
            <p className="has-text-grey-light">
              owner <FiExternalLink />
            </p>

            <p className="ellipsis">{data?.data?.data?.owner}</p>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default HotspotDetails;
