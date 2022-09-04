import axios from "axios";

const bysykkelAxios = axios.create({
  baseURL: "https://gbfs.urbansharing.com/bergenbysykkel.no",
});

export async function getAvailability() {
  const { data } = await bysykkelAxios.get(`/station_status.json`);
  return data;
}
