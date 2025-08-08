// client/src/services/authService.ts
import { http } from './http';

type User = { id: string; username: string; email: string };
type LoginResponse = { token: string; user: User };

export const authService = {
  register: (p: { username: string; email: string; password: string }) =>
    http('/api/auth/register', { method: 'POST', body: JSON.stringify(p) }),
  login: async (p: { email: string; password: string }) => {
    const data = await http<LoginResponse>('/api/auth/login', { method: 'POST', body: JSON.stringify(p) });
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
    return data.user;
  },
  logout: () => { localStorage.removeItem('token'); localStorage.removeItem('user'); },
  me: () => { const raw = localStorage.getItem('user'); return raw ? JSON.parse(raw) as User : null; }
};
