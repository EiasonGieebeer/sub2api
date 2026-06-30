# Local development

This fork follows the same repository model as `fast-api`:

- `origin`: `EiasonGieebeer/sub2api`
- `upstream`: `Wei-Shaw/sub2api`
- `main`: clean upstream-tracking branch
- `my-custom`: local development and deployment branch

Start PostgreSQL and Redis:

```bash
docker compose -f docker-compose.local-dev.yml up -d
```

The upstream CI currently uses pnpm 9. Use the same major version locally:

```bash
npx pnpm@9 install --frozen-lockfile
```

In GoLand, run `Backend: Sub2API`, then `Frontend: pnpm dev`. The backend is
available at `http://127.0.0.1:8081` and Vite at `http://127.0.0.1:3000`.

To sync upstream:

```bash
git fetch upstream
git checkout main
git merge --ff-only upstream/main
git push origin main
git checkout my-custom
git merge main
```

Pushes to `my-custom` trigger the deployment workflow. Like `fast-api`, the
workflow builds without a registry, compresses the image, copies it over SSH,
and recreates the application container on the server. Production PostgreSQL
and Redis remain persistent server-side services. Set the repository variable
`DEPLOY_ENABLED=true` only after configuring `SERVER_HOST`, `SERVER_USER`, and
`SERVER_SSH_KEY`; deployments remain safely skipped before that.
