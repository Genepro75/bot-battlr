// Simple API wrapper for bots data
const API_BASE_URL = 'http://localhost:3000';

export async function fetchBots() {
  const response = await fetch(`${API_BASE_URL}/bots`);
  if (!response.ok) {
    throw new Error('Failed to fetch bots');
  }
  return response.json();
}

export async function fetchBotById(botId) {
  const response = await fetch(`${API_BASE_URL}/bots/${botId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch bot');
  }
  return response.json();
}

export async function updateBot(botId, updates) {
  const response = await fetch(`${API_BASE_URL}/bots/${botId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updates),
  });
  if (!response.ok) {
    throw new Error('Failed to update bot');
  }
  return response.json();
}

export async function deleteBot(botId) {
  const response = await fetch(`${API_BASE_URL}/bots/${botId}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete bot');
  }
  return true;
}

export default {
  fetchBots,
  fetchBotById,
  updateBot,
  deleteBot,
};


