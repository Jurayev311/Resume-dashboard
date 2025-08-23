import axios from "axios";

const request = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
    "hl": localStorage.getItem("lang") || "en",
    "Access-Control-Allow-Origin": "http://localhost:3000"
  }
})

export {request}