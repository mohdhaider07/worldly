import axios from "axios";

const API_BASE_URL = "https://countries-api-abhishek.vercel.app";

// Backend API request instance
export const apiRequest = axios.create({
  baseURL: API_BASE_URL,
});
