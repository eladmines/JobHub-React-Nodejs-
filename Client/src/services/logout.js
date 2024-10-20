const API_URL = "/api/logout";

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
