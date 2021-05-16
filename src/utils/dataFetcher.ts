import axios from "axios";

export async function dataFetcher<T>(url: string): Promise<T> {
  return axios.get(url).then((res) => res.data);
}
