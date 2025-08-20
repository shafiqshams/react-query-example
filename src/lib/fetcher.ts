import { BASE_URL } from "./config";

export async function fetcher<T>(
  path: string,
  options?: RequestInit
): Promise<T> {
  const res: Response = await fetch(BASE_URL + path, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  if (!res.ok) {
    throw new Error(`Request failed, ${res.status}`);
  }

  return res.json();
}
