import { useState } from "react";
import { createUser } from "../services/userService"; // Make sure to adjust the import path

export const useRegistirationUser = () => {

  const registerUser = async (userData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const response = await createUser(userData);
      setSuccess(true);
      return response; // Return response if needed
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { registerUser, loading, error, success };
};
