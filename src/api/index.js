import axios from "axios";

const request = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
    "hl": localStorage.getItem("lang") || "en"
  }
})

export {request}