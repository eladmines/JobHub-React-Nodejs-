import { useEffect, useState } from "react";
import {getMain} from '../../services/getMain';

export const useMain = () => {
  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const result = await getMain();
        
      } catch (err) {
        
      } finally {
        
      }
    };

    fetchData();
  }, []);

 
};
