import { useState } from 'react';
import { postApiService } from '../services/postApiService';

export function useFetchPost(url,bodydata) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchData = async (url,bodydata) => {
    setLoading(true);
    setError(null);
    try {
      const result = await postApiService("/api/"+url,bodydata);

      setData(result);
    } catch (error) {
      
      setError(error);
    } finally {
      
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData };
}
