    export async function getApiService(url) {
        try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            },
            credentials: 'include',
        });
    
        if (!response.ok) {
            const errorText = await response.text();
            console.error("Server error:", errorText);
            throw new Error("Network response was not ok");
        }
    
        const data = await response.json(); 
    
        return data;
        } catch (error) {
        console.error("Fetch error:", error);
        throw error;
        }
    }
    