# GW2RPC Site (React rewrite)

This folder hosts the React + TypeScript + Vite rewrite of the original Flask site and API.

What's included:
- Home page and content converted to React components.
- Copy-Paste page at `/copy-paste` using query parameters `chat_code`, `name`, and `character`.
- Links to the existing static assets under `/static` (no duplication of images required).
- Static API endpoints for version and support at `/api/v1/build`, `/api/v1/support`, `/api/v2/build`, `/api/v2/support`.

Notes on API registry endpoints:
- The Flask app exposed large registry payloads at `/api/v1/registry` and `/api/v2/registry`.
- These can be replicated as static JSON files under `public/api/...` (filenames without extensions) for production hosting.
- If you want me to include the full registry payloads now, I can generate them from `rpcsite.py` and add them as static files.

Develop:
- From this folder, run: `npm install` then `npm run dev`.
- The app expects `/static/...` assets to be reachable at the site root during development (or adjust paths/move assets into `public/`).

Build:
- `npm run build` then `npm run preview` to serve the built bundle.
