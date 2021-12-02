import React from "react";
import { useGetHotspotRewardTotal } from "../hooks/queries";
import format from "date-fns/format";
import useHostSplit from "../hooks/useHostSplit";

interface Props {
  address: string;
  startDate: Date;
  endDate: string;
}
const DATE_FORMAT_STRING = "dd-MM-yyyy";

const HotspotRewards = ({
  address,
  startDate,
  endDate,
}: Props): JSX.Element => {
  const { data, status, isSuccess } = useGetHotspotRewardTotal({
    address,
    startDate,
    endDate,
  });
  const { hostCut } = useHostSplit();

  const totalRewards = data?.data?.data?.total ?? 0;
  const hostRewards = (hostCut * totalRewards) / 100;
  const ownerRewards = totalRewards - hostRewards;

  return (
    <div className="has-text-centered mb-6">
      <p className="is-size-7">
        {format(startDate, DATE_FORMAT_STRING)}
        <span className="has-text-grey-light mx-2">to</span>
        {format(endDate, DATE_FORMAT_STRING)}
      </p>
      <p>
        {totalRewards} <span className="has-text-grey-light">HNT</span>
      </p>
      {!!hostRewards && (
        <p>
          {hostRewards} <span className="has-text-grey-light">HNT (host)</span>
        </p>
      )}
      {!!hostRewards && (
        <p>
          {ownerRewards}{" "}
          <span className="has-text-grey-light">HNT (owner)</span>
        </p>
      )}
    </div>
  );
};

export default HotspotRewards;
