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
      <label
        for="company-website"
        class="block text-sm font-medium text-gray-500 mt-12"
      >
        Search hotspot by name
      </label>
      <div class="mt-1 flex rounded-md shadow-sm mb-12">
        <input
          type="text"
          name="company-website"
          id="company-website"
          class="py-2 px-2 rounded-md bg-gray-400 flex-1 block w-full text-gray-100 text-lg placeholder-gray-300"
          placeholder="Mean Pink Poodle"
          value={query}
          onChange={handleQueryOnChange}
        />
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
