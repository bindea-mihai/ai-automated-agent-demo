# Omniasig Demo App

Monorepo demo application for an insurance showcase.

## Structure

- `backend` - Clean Architecture API (`dotnet 10`, SQLite)
- `frontend/web` - Next.js React UI (TypeScript, App Router, Tailwind)

## First feature

- API exposes motor insurance products from SQLite.
- Seeded products:
  - `CASCO`
  - `RCA`
- Frontend shows product cards (view only, no actions).

## Run locally

### 1) Backend

```powershell
cd backend
# requires .NET SDK 10.0.100+
dotnet restore src/Web/Web.csproj
dotnet run --project src/Web/Web.csproj
```

API URL: `http://localhost:5000/api/Products`

### 2) Frontend

```powershell
cd frontend/web
copy .env.example .env.local
npm install
npm run dev
```

Frontend URL: `http://localhost:3000`

## Run with Docker

From repo root:

```powershell
docker compose up --build
```

Then open:

- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:5000/api/Products`

To stop and remove containers:

```powershell
docker compose down
```
