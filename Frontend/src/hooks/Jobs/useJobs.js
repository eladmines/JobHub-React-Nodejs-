// src/hooks/useJobs.js
import { useEffect, useState } from "react";
import {getJobs} from '../../services/Jobs/getJobs' // Import your service function

export const useJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getJobs();
        setJobs(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { jobs, loading, error }; // Make sure to return an object
};
