import { useState, useEffect } from "react";

/**
 * Custom Hook for fetching API data.
 * @param {string} url - The API endpoint.
 * @param {Object} options - Optional fetch settings.
 * @returns {Object} { data }
 */
function useFetchData(url, options = {}) {
  const [data, setData] = useState(null);

  // Fetch function that can be triggered manually
  const fetchData = async () => {
    try {
      const response = await fetch(url, options);
      if (!response.ok) throw new Error("Failed to fetch data");

      const result = await response.json();
      setData(result);
    } catch (err) {
      console.log(err);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, [url]);

  return { data };
}

export default useFetchData;