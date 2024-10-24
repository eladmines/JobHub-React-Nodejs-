export async function postApiService(url, bodyData) {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',  // Set content type to JSON
                'Accept': 'application/json',
            },
            body: JSON.stringify(bodyData),  // Send JSON string instead
            credentials: 'include',
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("Server error:", errorText);
            throw new Error(`Network response was not ok: ${errorText}`);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Fetch error:", error);
        throw error;
    }
}
