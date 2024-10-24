const API_URL = "auth";

export const auth = async (userData) => {
  
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
      credentials: 'include',
    });

    if (res.ok) {
      const result = await res.json();
      return { success: true, data: result };
      
    } else {
      const errorData = await res.json();
      return { success: false, message: errorData.message || 'Authentication failed' };
    }
  } catch (error) {
    console.error("Error during authentication:", error);
    return { success: false, message: 'An error occurred. Please try again.' };
  }
};
