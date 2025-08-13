import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'https://whatsapp-clone-backend-y604.onrender.com/';

export async function getConversations() {
  const res = await axios.get(`${API_URL}/conversations`);
  return res.data;
}
