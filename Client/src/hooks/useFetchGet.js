import { useState } from 'react';
import { getApiService } from '../services/getApiService';

export function useFetchGet() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null);

  const fetchData = async (url) => {
    setLoading(true);
    setError(null);
    try {
      const result = await getApiService("/api/"+url); 
      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  
  return { data, loading, error, fetchData};
}
