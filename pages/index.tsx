import React from "react";
import Head from "next/head";
import Container from "../components/Container";
import { useDebounce } from "use-debounce";
import { useSearchHotspotsByName } from "../hooks/queries";
import HotspotSearchResult from "../components/HotspotSearchResult";

export default function Home() {
  const [query, setQuery] = React.useState<string>(null);
  const [debouncedQuery] = useDebounce(query, 500);

  const { data } = useSearchHotspotsByName({
    name: debouncedQuery,
    options: { enabled: !!debouncedQuery },
  });

  const handleQueryOnChange = React.useCallback((event) => {
    setQuery(event.target.value);
  }, []);

  return (
    <Container>
      <Head>
        <title>Helium Hotspot Summary</title>
      </Head>
      <div className="columns is-centered">
        <div className="column is-6 has-text-centered">
          <p className="has-text-grey-light mb-4">search hotspots by name</p>
          <input
            type="text"
            placeholder="mean pink poodle"
            value={query}
            onChange={handleQueryOnChange}
            className="mb-4"
          />
        </div>
      </div>
      {data?.data?.data.map((hotspot, index) => (
        <HotspotSearchResult
          key={hotspot.address}
          address={hotspot.address}
          name={hotspot.name}
          location={
            hotspot?.geocode?.short_street &&
            `${hotspot?.geocode?.short_street}, ${hotspot?.geocode?.short_city}, ${hotspot?.geocode?.short_state}, ${hotspot?.geocode?.short_country}`
          }
        />
      ))}
    </Container>
  );
}
