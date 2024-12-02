const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
export const getcustomersFn = async () => {
  const res = await fetch(`${BACKEND_URL}/customers`);
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Ocurrio un error al obtener los datos");
  }
  return data;
};
