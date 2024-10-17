const API_URL = "http://localhost:5000/logout";

export const logout = async () => {
    const res = await fetch(API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include',
    });
    localStorage.removeItem('skills');
};
