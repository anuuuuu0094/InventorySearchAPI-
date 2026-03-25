import { useState } from "react";
import { fetchSearch } from "../services/api";

const useSearch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const search = async (params) => {
    try {
      setLoading(true);
      const res = await fetchSearch(params);
      setData(res.data.data || []);
    } catch (err) {
      console.log(err);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, search };
};

export default useSearch;