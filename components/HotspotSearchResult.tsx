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
  name: string;
  location: string;
}

const HotspotSearchResult = ({
  address,
  name,
  location,
}: Props): JSX.Element => {
  return (
    <div className="mb-8">
      <Card>
        <Link href={`/hotspot/${encodeURIComponent(address)}`}>
          <a>
            <div className="flex flex-row items-center">
              <div className="flex-1">
                <p className="text-xs text-gray-400">Name</p>
                <p className="overflow-ellipsis overflow-hidden text-gray-50 mb-4">
                  {name}
                </p>
                <p className="text-xs text-gray-400">Address</p>
                <p className="overflow-ellipsis overflow-hidden text-gray-50 mb-4">
                  {address}
                </p>
                {location && (
                  <>
                    <p className="text-xs text-gray-400">Location</p>
                    <p className="overflow-ellipsis overflow-hidden text-gray-50">
                      {location}
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
  );
};

export default HotspotSearchResult;
