import React from "react";
import { useGetHotspotRewardTotal } from "../hooks/queries";
import Card from "./Card";
import format from 'date-fns/format';

interface Props {
  address: string;
  startDate: Date;
  endDate: string;
}
const DATE_FORMAT_STRING = 'dd-MM-yyyy';

const HotspotRewards = ({
  address,
  startDate,
  endDate,
}: Props): React.FunctionComponent<Props> => {


  const { data, status, isSuccess } = useGetHotspotRewardTotal({
    address,
    startDate,
    endDate,
  });

  return (
    <div className="flex flex-row mb-6">
      <Card>
        <p className="text-xs text-gray-400">{format(startDate, DATE_FORMAT_STRING)} -> {format(endDate, DATE_FORMAT_STRING)}</p>
        <p className="overflow-ellipsis overflow-hidden text-gray-50">
          {data?.data?.data?.total}
        </p>
      </Card>
    </div>
  );
};

export default HotspotRewards;
