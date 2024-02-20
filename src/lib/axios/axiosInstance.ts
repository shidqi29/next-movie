import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.TMDB_API_BASE_URL,
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
  },
});
