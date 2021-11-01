import React from "react";
import { useGetHotspot } from "../hooks/queries";
import Card from "./Card";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/solid";
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
        <Link href={`/account/${encodeURIComponent(data?.data?.data?.owner)}`}>
          <a>
            <div class="flex flex-row items-center">
              <div class="flex-1 overflow-ellipsis overflow-hidden">
                <p className="text-xs text-gray-400">Owner</p>

                <p className="overflow-ellipsis overflow-hidden text-gray-50">
                  {data?.data?.data?.owner}
                </p>
              </div>
              <div class="flex-0">
                <ChevronRightIcon className="w-5 h-5 text-gray-500" />
              </div>
            </div>
          </a>
        </Link>
      </Card>
    </div>
  );
};

export default HotspotDetails;
