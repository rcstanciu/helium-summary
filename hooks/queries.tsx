import {
  useMutation,
  useQuery,
  QueryClient,
  UseQueryResult,
  UseMutationResult,
} from "react-query";

import { getHotspot, getHotspotRewardTotal } from "../api";

export enum QueryKeysEnum {
  Hotspot = "hotspot",
  HotspotRewardTotal = "hotspot_reward_total",
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 30000,
    },
  },
});

export const useGetHotspotRewardTotal = ({
  address,
  startDate,
  endDate,
}: {
  address: string;
  startDate: Date;
  endDate: Date;
}): UseQueryResult =>
  useQuery(
    [QueryKeysEnum.HotspotRewardTotal, address, startDate, endDate],
    () => getHotspotRewardTotal({ address, startDate, endDate })
  );

export const useGetHotspot = ({
  address,
}: {
  address: string;
}): UseQueryResult =>
  useQuery([QueryKeysEnum.Hotspot, address], () => getHotspot({ address }));
