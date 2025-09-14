import axios from 'axios';

const API_BASE_URL = "https://rag-backend-p744.onrender.com"

export const createSession = async () => {
  const response = await axios.post(`${API_BASE_URL}/session`);
  return response.data.sessionId;
};

export const getHistory = async (sessionId) => {
  const response = await axios.get(`${API_BASE_URL}/history/${sessionId}`);
  return response.data.history;
};

export const sendMessage = async (sessionId, query) => {
  const response = await axios.post(`${API_BASE_URL}/chat`, { sessionId, query });
  return response.data.answer;
};

export const resetSessionHistory = async (sessionId) => {
  await axios.delete(`${API_BASE_URL}/history/${sessionId}`);
};
