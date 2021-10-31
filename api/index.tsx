import axios, { AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: "https://api.helium.io/v1/",
  timeout: 20000,
});

export const getHotspotRewardTotal = ({
  address,
  startDate,
  endDate,
}: {
  address: string;
  startDate: Date;
  endDate: Date;
}) =>
  instance.get(`hotspots/${address}/rewards/sum`, {
    params: {
      min_time: startDate.toISOString(),
      max_time: endDate.toISOString(),
    },
  });

export const getHotspot = ({ address }: { address: string }) =>
  instance.get(`hotspots/${address}`);
