import {
  useMutation,
  useQuery,
  QueryClient,
  UseQueryResult,
  UseMutationResult,
  UseQueryOptions,
} from "react-query";

import {
  getAccount,
  getAccountHotspots,
  getHotspot,
  getHotspotRewardTotal,
  searchHotspotByName,
} from "../api";

export enum QueryKeysEnum {
  Hotspot = "hotspot",
  HotspotRewardTotal = "hotspot_reward_total",
  Account = "account",
  AccountHotspots = "account_hotspots",
  HotspotSearchByName = "hotspot_search_by_name",
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30000,
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

export const useGetAccount = ({
  address,
}: {
  address: string;
}): UseQueryResult =>
  useQuery([QueryKeysEnum.Account, address], () => getAccount({ address }));

export const useGetAccountHotspots = ({
  address,
}: {
  address: string;
}): UseQueryResult =>
  useQuery([QueryKeysEnum.AccountHotspots, address], () =>
    getAccountHotspots({ address })
  );

export const useSearchHotspotsByName = ({
  name,
  options,
}: {
  name: string;
  options: UseQueryOptions;
}): UseQueryResult =>
  useQuery(
    [QueryKeysEnum.HotspotSearchByName, name],
    () => searchHotspotByName({ name }),
    options
  );
