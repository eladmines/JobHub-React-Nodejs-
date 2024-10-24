import { useState } from 'react';
import { getApiService } from '../services/getApiService';
import { SERVER } from '../constants/CompaniesLogo';

export function useFetchGet() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null);

  const fetchData = async (url) => {
    setLoading(true);
    setError(null);
    try {
      const result = await getApiService(SERVER+url); 
      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  
  return { data, loading, error, fetchData};
}
