import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
  useCallback,
} from "react";

interface HostSplitContextType {
  hostCut: number | null;
  updateHostCut: (newHostcut: number) => void;
}

const HostSplitContext = createContext<HostSplitContextType>(
  {} as HostSplitContextType
);

export function HostSplitProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [hostCut, setHostCut] = useState(null);

  const updateHostCut = useCallback((newHostCut: number | null) => {
    setHostCut(newHostCut);
  }, []);

  const hostSplitContext = useMemo(
    () => ({
      hostCut,
      updateHostCut,
    }),
    [hostCut]
  );

  return (
    <HostSplitContext.Provider value={hostSplitContext}>
      {children}
    </HostSplitContext.Provider>
  );
}

export default function useHostSplit(): HostSplitContextType {
  return useContext(HostSplitContext);
}
