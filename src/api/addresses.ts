import { adaptResponse } from "./adapter/adapter";
export interface Filters {
  lastName: string | null;
  name: string | null;
  profile: string | null;
}
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const getAddressesFn = async (
  queryKey: [string, number, Filters?, number?]
) => {
  const [, size, filters, index] = queryKey;

  const params = new URLSearchParams();
  params.append("paging", `${index},${size}`);
  params.append("sort", "lastname:asc");

  if (filters) {
    const { name, lastName, profile } = filters;
    if (name) params.append("search", `name:${name}`);
    if (lastName) params.append("search", `lastname:${lastName}`);
    if (profile) params.append("search", `profile.name:${profile}`);
  }
  const url = `${BACKEND_URL}?${params.toString()}`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);

  if (!res.ok) throw new Error("Ocurrió un error al obtener los datos");

  const dataAdapted = adaptResponse(data.data);
  return dataAdapted;
};
