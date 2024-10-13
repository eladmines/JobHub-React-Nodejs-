import { useState,useEffect } from 'react';
import {jwtValidation} from '../services/jwtValidation';

export function useJwtValidation(){
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    useEffect(() => {
        const validateJwt = async () => {
            try {
                const result = await jwtValidation();
                setIsAuthenticated(result.success);
            } catch (err) {
                
            } finally {
                
            }
        };

        validateJwt();
    }, []);
    return { isAuthenticated };
}