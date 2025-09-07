# Agents, Workers & Build Notes for Jules

## Build
- `npm run build` — Vite static build into `dist/`
- Requires Node 18 (pinned in .nvmrc).

## Tests
- `npm test` — Vitest suite (needs `libgl1` for WebGL stubs).

## Workers
- `src/physics.worker.ts` bundles automatically via Vite.

## Common Tasks
- Lint fix: `npm run lint -- --fix`
- Add a planet: edit `src/data.ts`, `bodies/`, and update selector UI.
