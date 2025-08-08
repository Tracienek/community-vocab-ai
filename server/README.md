# Community Vocab Backend (Express + TypeScript + MongoDB)

## Quick Start
1. Copy `.env.example` to `.env` and fill values.
2. Install deps: `npm install`
3. Run dev: `npm run dev`
4. Test health: `GET http://localhost:3000/health`

## REST API
- `POST /api/auth/register` { username, email, password }
- `POST /api/auth/login` { email, password } -> { token, user }
- `GET /api/words` -> list latest 100 words
- `POST /api/words` (Bearer token) { word, meaning, example }
- `GET /api/words/:id`
- `POST /api/words/:id/upvote` (Bearer token)

## Notes
- CORS allowed for `CLIENT_ORIGIN` from `.env`.
- JWT tokens expire in 7 days.
