import axios, { AxiosResponse } from "axios";

const api = axios.create({
  baseURL: "https://api.jikan.moe/v4",
  headers: {
    "Content-Type": "application/json",
  },
});

export const APIGet = async <T>(url: string): Promise<T> => {
  const response: AxiosResponse<T> = await api.get(url);
  return response.data;
};
