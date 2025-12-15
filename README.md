# Verse

Verse is a technical documentation site built with Docusaurus. It demonstrates disciplined information architecture: explicit doc types, calm navigation, and clear cross-links between curated content and exploration notes. Search is powered by a local index.

## Structure
- Start Here
- Platforms and Interfaces
- Systems and Design Patterns
- How-To Guides
- Exploration Notes
- Templates

See `sidebars.ts` for the exact IA. Each doc has frontmatter: `title`, `description`, `tags`, `last_reviewed`, `status` (`draft` or `stable`).

## Local development
```bash
npm install
npm start
```
The site runs at `http://localhost:3000/verse` with hot reload.

## Make targets
- `make install` - install dependencies.
- `make start` - run the dev server.
- `make build` - production build.
- `make serve` - preview the production build locally.
- `make deploy` - build and push to the `gh-pages` branch via `gh-pages` (manual deploys; CI handles main).
- `make publish` - alias for `make deploy`.
- `make push` - push the current branch to origin (assumes commits are ready).
- `make clean` - remove build artifacts and node_modules.

## Authoring guidelines
- Choose the right type: platforms, patterns, guides, exploration notes, or templates.
- Use the provided file structures for platforms and patterns to keep pages predictable.
- Cross-link curated docs to exploration notes and back. Include prose links where narrative context lives, for example `https://pruning-my-pothos.github.io/prose`.
- Update `sidebars.ts` whenever you add a doc so navigation stays stable.
- Run `npm run build` before opening a PR to catch broken links.

## Publishing workflow
- GitHub Actions builds and deploys on push to `main` using `.github/workflows/deploy.yml`.
- Output is published to the `gh-pages` branch and served at `https://pruning-my-pothos.github.io/verse`.
- Base URL is `/verse/`; keep it unchanged unless hosting changes.

## Project configuration
- `organizationName` is `pruning-my-pothos`; `projectName` is `verse`.
- Blog is disabled to keep focus on documentation.
- Search uses `@easyops-cn/docusaurus-search-local` with no external keys.
