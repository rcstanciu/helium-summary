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
import useHostSplit from "../../hooks/useHostSplit";

interface Props {
  address: string;
}

const Hotspot = ({ address }: Props): JSX.Element => {
  const { hostCut, updateHostCut } = useHostSplit();

  const [dates, setDates] = useState<Array<Array<Date>>>([
    [getMonthInterval().start, getMonthInterval().end],
  ]);

  const handleViewMore = useCallback(() => {
    const lastDate = dates[0][0];
    const newDateInterval = getMonthInterval(sub(lastDate, { days: 1 }));
    setDates([[newDateInterval.start, newDateInterval.end], ...dates]);
  }, [dates]);

  const handleSetHostCut = useCallback((e) => {
    e.preventDefault();

    let newValue = e.target.value as number;

    if (newValue) {
      // Ensure a minimum of 1
      newValue = Math.max(1, newValue);

      // Ensure a maximum of 99
      newValue = Math.min(99, newValue);
    }

    updateHostCut(newValue);
  }, []);

  const handleClearHostCut = useCallback((e) => {
    e.preventDefault();

    updateHostCut(null);
  }, []);

  const processedHostCut = hostCut || "";

  return (
    <Container>
      <Head>
        <title>Hotspot: {address} - Helium Hotspot Summary</title>
      </Head>
      <HotspotDetails address={address} />

      <div className="columns is-centered has-text-centerd">
        <div className="column is-3">
          <p className="has-text-grey-light mb-2">host cut (%)</p>
          <div className="columns m-0 p-0">
            <input
              type="number"
              placeholder="50"
              value={processedHostCut}
              onChange={handleSetHostCut}
            />
            <span>
              <button onClick={handleClearHostCut}>clear</button>
            </span>
          </div>
        </div>
      </div>
      <div className="columns is-centered has-text-centerd">
        <div className="column is-narrow">
          <button onClick={handleViewMore}>view previous month</button>
        </div>
      </div>
      <div className="columns is-centered">
        <div className="column is-half">
          {dates.map((entry, index) => (
            <HotspotRewards
              key={index}
              address={address}
              startDate={entry[0]}
              endDate={entry[1]}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export async function getServerSideProps(context) {
  const { address } = context.query;

  return { props: { address } };
}

export default Hotspot;
