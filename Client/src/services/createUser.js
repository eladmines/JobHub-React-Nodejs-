const API_URL = "user/createuser";

export const createUser = async (userData) => {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    if (res.status === 200 || res.status === 201) {
        return true;
    }

  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
