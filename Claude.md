# Motor Insurance Products App — Agent Instructions

## Project Overview
This repository is a monorepo for a motor insurance demo application.

- `backend/` — ASP.NET Core (.NET 10) API generated from the Clean Architecture template
- `frontend/web/` — Next.js app (App Router, TypeScript, Tailwind)
- `docker-compose.yml` — containerized run configuration for backend + frontend

The first implemented feature is a products listing for motor insurance products (`CASCO`, `RCA`) stored in SQLite and displayed as cards in the frontend.

## Current Monorepo Structure
```txt
/
├── backend/
│  ├── src/
│  │  ├── Domain/
│  │  ├── Application/
│  │  ├── Infrastructure/
│  │  └── Web/
│  ├── tests/
│  │  ├── Application.FunctionalTests/
│  │  ├── Application.UnitTests/
│  │  ├── Domain.UnitTests/
│  │  └── Infrastructure.IntegrationTests/
│  ├── InsuranceDemo.slnx
│  └── Dockerfile
├── frontend/
│  └── web/
│     ├── src/
│     │  └── app/
│     ├── public/
│     └── Dockerfile
├── docker-compose.yml
├── README.md
├── Claude.md
└── task.md
```

## Technology Stack
- **Backend**: .NET 10, ASP.NET Core minimal APIs, MediatR, EF Core, SQLite
- **Frontend**: Next.js (App Router), React, TypeScript, Tailwind CSS
- **Database**: SQLite (local file in `backend/src/Web/app.db` during local development)
- **Containers**: Dockerfiles for backend and frontend + compose orchestration

## Domain Knowledge
Motor insurance products in this demo:

- **RCA** — mandatory third-party liability insurance
- **CASCO** — optional comprehensive/collision insurance

## Backend Architecture Notes
- Clean Architecture dependency direction is preserved: `Web -> Application -> Domain`
- `Infrastructure` implements persistence and identity concerns
- API surface uses endpoint groups in `backend/src/Web/Endpoints/` (not MVC controllers)
- Product read endpoint currently implemented:
	- `GET /api/Products`

Related implemented product files:
- `backend/src/Domain/Entities/Product.cs`
- `backend/src/Application/Products/Queries/GetProducts/`
- `backend/src/Web/Endpoints/Products.cs`
- `backend/src/Infrastructure/Data/Configurations/ProductConfiguration.cs`

## Frontend Notes
- Uses App Router in `frontend/web/src/app/`
- `page.tsx` is a server component that fetches products from the backend
- API URL resolution:
	- `API_BASE_URL` (preferred in containers/internal network)
	- fallback to `NEXT_PUBLIC_API_BASE_URL`
	- fallback to `http://localhost:5000`

## Runtime Notes
- Local backend run:
	- `dotnet restore src/Web/Web.csproj`
	- `dotnet run --project src/Web/Web.csproj`
- Local frontend run:
	- `npm install`
	- `npm run dev`
- Docker run:
	- `docker compose up --build`

## Task Execution Rules
- Read `task.md` before implementing new work
- Explore existing files before writing code
- Do not leave TODO placeholders
- Validate changes with builds:
	- backend: `dotnet build src/Web/Web.csproj`
	- frontend: `npm run build`
