import React from "react";
import {
  useGetAccount,
  useGetAccountHotspots,
  useGetHotspot,
} from "../hooks/queries";
import Card from "./Card";
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
        <div className="mb-8 flex flex-row" key={hotspot.address}>
          <Card>
            <Link href={`/hotspot/${encodeURIComponent(hotspot.address)}`}>
              <a>
                <div className="flex flex-row items-center">
                  <div className="flex-1">
                    <p className="text-xs text-gray-400">Name</p>
                    <p className="overflow-ellipsis overflow-hidden text-gray-50 mb-4">
                      {hotspot.name}
                    </p>
                    <p className="text-xs text-gray-400">Address</p>
                    <p className="overflow-ellipsis overflow-hidden text-gray-50 mb-4">
                      {hotspot.address}
                    </p>
                    {hotspot?.geocode?.short_street && (
                      <>
                        <p className="text-xs text-gray-400">Location</p>
                        <p className="overflow-ellipsis overflow-hidden text-gray-50">
                          {hotspot?.geocode?.short_street},{" "}
                          {hotspot?.geocode?.short_city},{" "}
                          {hotspot?.geocode?.short_state},{" "}
                          {hotspot?.geocode?.short_country}
                        </p>
                      </>
                    )}
                  </div>
                  <div className="flex-0">
                    <ChevronRightIcon className="h-8 w-8 text-gray-500" />
                  </div>
                </div>
              </a>
            </Link>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default AccountHotspots;
