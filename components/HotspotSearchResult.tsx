import React from "react";
import {
  useGetAccount,
  useGetAccountHotspots,
  useGetHotspot,
} from "../hooks/queries";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/solid";

interface Props {
  address: string;
  name: string;
  location: string;
}

const HotspotSearchResult = ({
  address,
  name,
  location,
}: Props): JSX.Element => {
  return (
    <Link href={`/hotspot/${encodeURIComponent(address)}`}>
      <a className="no-decoration">
        <div className="columns is-vcentered">
          <div className="column is-3">
            <p className="is-size-6 has-text-grey-light">name</p>
            <p className="is-size-6 mb-2 ellipsis">{name}</p>
          </div>
          <div className="column is-3">
            <p className="is-size-6 has-text-grey-light">address</p>
            <p className="is-size-6 mb-2 ellipsis">{address}</p>
          </div>
          <div className="column is-5">
            {location && (
              <>
                <p className="is-size-6 has-text-grey-light">location</p>
                <p className="is-size-6 mb-2 ellipsis">{location}</p>
              </>
            )}
          </div>
          <div className="column is-narrow is-hidden-mobile">
            <ChevronRightIcon
              height={30}
              width={30}
              className="has-text-grey"
            />
          </div>
        </div>
      </a>
    </Link>
  );
};

export default HotspotSearchResult;
