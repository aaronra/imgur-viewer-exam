import axios from "axios";
import { clientId } from "common/constant";

export const apiInstance = axios.create({
  baseURL: "https://api.imgur.com/3",
  headers: {
    Authorization: `Client-ID ${clientId}`,
  },
});
