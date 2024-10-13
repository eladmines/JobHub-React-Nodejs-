import { useEffect, useState } from "react";
import {getSavedJobs} from '../../services/Jobs/getSavedJobs';
export const useSavedJobs = () => {
    
  const [savedJobsCount, setSavedJobsCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const result = await getSavedJobs();
        setSavedJobsCount(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { savedJobsCount, loading, error };
};
