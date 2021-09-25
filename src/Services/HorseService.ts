import httpClient from "../HttpClient";
import { Horse } from "../Types/Horse";

export const getHorses = async () => {
  const { data } = await httpClient.get<Horse[]>(`/horse`);
  return data;
};
