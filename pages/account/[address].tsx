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
import AccountDetails from "../../components/AccountDetails";
import AccountHotspots from "../../components/AccountHotspots";

interface Props {
  address: string;
}

const Hotspot = ({ address }: Props): JSX.Element => {
  return (
    <Container>
      <Head>
        <title>Account: {address} - Helium Hotspot Summary</title>
      </Head>
      <AccountDetails address={address} />
      <AccountHotspots address={address} />
    </Container>
  );
};

export async function getServerSideProps(context) {
  const { address } = context.query;

  return { props: { address } };
}

export default Hotspot;
