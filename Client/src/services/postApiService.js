export async function postApiService(url, bodyData) {
    console.log("bodyData",bodyData)
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: 'include',
            body: JSON.stringify(bodyData),
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
