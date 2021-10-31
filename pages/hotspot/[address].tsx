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
interface Props {
  address: string;
}

const Hotspot = ({ address }: Props): React.FunctionComponent<Props> => {
  const [dates, setDates] = useState<Array<Array<Date>>>([
    [sub(new Date(), { months: 1 }), new Date()],
  ]);

  const viewMore = useCallback(() => {
    const lastDate = dates[0];

    setDates([[sub(lastDate[0], { months: 1 }), lastDate[0]], ...dates]);
  }, [dates]);

  return (
    <Container>
      <Head>
        <title>{address} - Helium Hotspot Summary</title>
      </Head>
      <HotspotDetails address={address} />
      {dates.map((entry, index) => (
        <HotspotRewards
          key={index}
          address={address}
          startDate={entry[0]}
          endDate={entry[1]}
        />
      ))}
      <div className="flex items-center justify-center my-12">
        <button
          onClick={viewMore}
          className="bg-blue-400 text-gray-100 py-2 px-4 rounded-md"
        >
          +1 month
        </button>
      </div>
    </Container>
  );
};

export async function getServerSideProps(context) {
  const { address } = context.query;

  return { props: { address } };
}

export default Hotspot;
