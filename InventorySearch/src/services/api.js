import axios from "axios";

const API = axios.create({
  baseURL: "https://invantorysearchapi-backend.onrender.com/",
});

export const fetchSearch = (params) => API.get("/search", { params });