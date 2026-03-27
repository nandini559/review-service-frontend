import api from "../api/client";

export const getUsers = () => api.get("/users");

export const createUser = (data : any) => api.post("/users", data);
