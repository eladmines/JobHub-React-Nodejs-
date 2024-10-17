import { useState } from "react";
import { createUser } from "../services/userService";

export const useRegistirationUser = () => {

  const registerUser = async (userData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const response = await createUser(userData);
      setSuccess(true);
      return response;
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { registerUser, loading, error, success };
};
