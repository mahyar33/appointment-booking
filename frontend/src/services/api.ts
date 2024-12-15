import axios from "axios";
import { Slot } from "../model/slot";

const API_URL = import.meta.env.VITE_API_URL;

export const getAvailableSlots = async (date: string): Promise<Slot[]> => {
  const response = await axios.get(`${API_URL}/slots?date=${date}`);
  return response.data;
};

export const bookSlot = async (slotId: number, name: string): Promise<Slot> => {
  const response = await axios.post(`${API_URL}/slots/${slotId}/book`, {
    name,
  });
  return response.data;
};
