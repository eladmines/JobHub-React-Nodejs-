import { useState } from 'react';
import { postApiService } from '../services/postApiService';
import { SERVER } from '../constants/CompaniesLogo';

export function useFetchPost() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (url, bodydata) => {
    setLoading(true);
    setError(null);
    try {
      const result = await postApiService(SERVER + url, bodydata);
      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData };
}
