const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:5173';

export async function http<T>(path: string, options: RequestInit = {}): Promise<T> {
  const url = `${baseURL}${path}`;

  const headers = new Headers(options.headers);
  headers.set('Content-Type', 'application/json');

  const token = localStorage.getItem('token');
  if (token) headers.set('Authorization', `Bearer ${token}`);

  const res = await fetch(url, {
    ...options,
    headers,
  });

  if (!res.ok) throw new Error(await res.text());
  return res.json() as Promise<T>;
}
