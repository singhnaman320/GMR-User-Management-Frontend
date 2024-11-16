import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api/users' });

export const register = (data) => API.post('/register', data);
export const login = (data) => API.post('/login', data);
export const update = (id, data) => API.put(`/update/${id}`, data);
