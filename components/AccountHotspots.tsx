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
}

const AccountHotspots = ({ address }: Props): JSX.Element => {
  const { data } = useGetAccountHotspots({ address });

  return (
    <div>
      {data?.data?.data.map((hotspot, index) => (
        <Link
          href={`/hotspot/${encodeURIComponent(hotspot.address)}`}
          passHref
          key={hotspot.address}
        >
          <a className="no-decoration">
            <div className="columns is-vcentered">
              <div className="column is-3">
                <p className="is-size-6 has-text-grey-light">name</p>
                <p className="is-size-6 mb-2 ellipsis">{hotspot?.name}</p>
              </div>
              <div className="column is-3">
                <p className="is-size-6 has-text-grey-light">address</p>
                <p className="is-size-6 mb-2 ellipsis">{hotspot?.address}</p>
              </div>
              <div className="column is-5">
                {hotspot?.geocode?.short_street && (
                  <>
                    <p className="is-size-6 has-text-grey-light">Location</p>
                    <p className="is-size-6 mb-2 ellipsis">
                      {hotspot?.geocode?.short_street},{" "}
                      {hotspot?.geocode?.short_city},{" "}
                      {hotspot?.geocode?.short_state},{" "}
                      {hotspot?.geocode?.short_country}
                    </p>
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
      ))}
    </div>
  );
};

export default AccountHotspots;
