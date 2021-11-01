import React, { useState, useCallback } from "react";
import { dehydrate } from "react-query";
import {
  queryClient,
  QueryKeysEnum,
  useGetHotspotRewardTotal,
} from "../../hooks/queries";
import sub from "date-fns/sub";
import HotspotDetails from "../../components/HotspotDetails";
import Container from "../../components/Container";
import HotspotRewards from "../../components/HotspotRewards";
import Head from "next/head";
import { getMonthInterval } from "../../utils/date";

interface Props {
  address: string;
}

const Hotspot = ({ address }: Props): JSX.Element => {
  const [dates, setDates] = useState<Array<Array<Date>>>([
    [getMonthInterval().start, getMonthInterval().end],
  ]);

  const viewMore = useCallback(() => {
    const lastDate = dates[0][0];
    const newDateInterval = getMonthInterval(sub(lastDate, { days: 1 }));
    setDates([[newDateInterval.start, newDateInterval.end], ...dates]);
  }, [dates]);

  return (
    <Container>
      <Head>
        <title>Hotspot: {address} - Helium Hotspot Summary</title>
      </Head>
      <HotspotDetails address={address} />
      <div className="flex items-center justify-center mb-12">
        <button
          onClick={viewMore}
          className="bg-blue-500 text-gray-100 py-2 px-4 rounded-md"
        >
          Previous month
        </button>
      </div>
      {dates.map((entry, index) => (
        <HotspotRewards
          key={index}
          address={address}
          startDate={entry[0]}
          endDate={entry[1]}
        />
      ))}
    </Container>
  );
};

export async function getServerSideProps(context) {
  const { address } = context.query;

  return { props: { address } };
}

export default Hotspot;
