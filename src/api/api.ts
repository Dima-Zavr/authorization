import axios from "axios";

export const api = axios.create({
    baseURL: "https://shift-intensive.ru/api"
});

api.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem("token")}`;
