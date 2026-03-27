import { useEffect, useState } from "react";
import useSearch from "../hooks/useSearch";

import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import PriceFilter from "../components/PriceFilter";
import InventoryCard from "../components/InventoryCard";
import NoResults from "../components/NoResults";

const Home = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const { data, loading, search } = useSearch();

  const handleSearch = () => {

      if (minPrice && maxPrice && Number(minPrice) > Number(maxPrice)) {
    alert("Min price cannot be greater than max price");
    return;
  }

  if (!query && !category && !minPrice && !maxPrice) {
    search({});
    return;
  }
    search({
      q: query,
      category,
      minPrice,
      maxPrice,
    });
  };

  useEffect(() => {
    search({});
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Inventory Search</h1>

      {/* Filters */}
      <div className="bg-white p-4 rounded shadow mb-6 space-y-3">
        <SearchBar value={query} onChange={setQuery} />

        <div className="flex flex-col sm:flex-row gap-3">
          <CategoryFilter value={category} onChange={setCategory} />
          <PriceFilter
            min={minPrice}
            max={maxPrice}
            setMin={setMinPrice}
            setMax={setMaxPrice}
          />

          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-4 py-2 rounded w-full sm:w-auto"
          >
            Search
          </button>
        </div>
      </div>


      {/* Results */}
      {loading ? (
        <p>Loading...</p>
      ) : data.length === 0 ? (
        <NoResults />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.map((item) => (
            <InventoryCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;