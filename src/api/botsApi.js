// API functions for bot operations
const BOTS_API_URL = "http://localhost:3001/bots";

// Fetch all bots from the API
export async function fetchBots() {
  try {
    const response = await fetch(BOTS_API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch bots");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching bots:", error);
    throw error;
  }
}

// Delete a bot by ID
export async function deleteBot(id) {
  try {
    const response = await fetch(`${BOTS_API_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete bot");
    }
    return true;
  } catch (error) {
    console.error("Error deleting bot:", error);
    throw error;
  }
}

// Get a single bot by ID
export async function getBotById(id) {
  try {
    const response = await fetch(`${BOTS_API_URL}/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch bot");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching bot:", error);
    throw error;
  }
}
