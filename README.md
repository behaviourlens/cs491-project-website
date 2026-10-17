# BehaviourLens — Project Website

Project information website for **BehaviourLens**, a CS491/CS492 Senior Design Project at Bilkent University. It hosts the project description, team, course deliverables, and repository links.

Live site: https://behaviourlens.github.io/cs491-project-website/

This repository contains only the information website, not the BehaviourLens application.

## Development

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev       # start the development server
npm run build     # production build into dist/
npm run preview   # serve the production build locally
npm run lint
```

## Updating content

All content lives in `src/data/`, so updates don't require touching components.

| File | Contents |
|---|---|
| `src/data/project.js` | Name, pronunciation, description, objective, research direction |
| `src/data/features.js` | Key features and their status (`planned`, `in-progress`, `implemented`) |
| `src/data/team.js` | Team members and advisors (add jury members to `advisors`) |
| `src/data/documents.js` | Course deliverables |
| `src/data/repositories.js` | GitHub repositories |

### Publishing a deliverable

1. Put the PDF in `public/documents/`, using a lowercase, hyphenated name (e.g. `analysis-report.pdf`).
2. In `src/data/documents.js`, change the entry's `status` to `'available'` and set `file: 'documents/analysis-report.pdf'` (and optionally `submittedDate`).

Entries with status `'upcoming'` are shown as plain text with an "Upcoming" badge and cannot be downloaded.

### Pronunciation audio

1. Record a 1–2 second clip of the project name and save it as `public/assets/pronunciation.mp3`.
2. In `src/data/project.js`, set `pronunciation.audio` to `'assets/pronunciation.mp3'`.

The play button is hidden while `audio` is `null`.

## File paths and the base path

GitHub Pages serves the site under `/cs491-project-website/`, which is set as `base` in `vite.config.js`.

- Never start paths to files in `public/` with `/`.
- Store paths without a leading slash (e.g. `'documents/report.pdf'`) and build URLs with `assetUrl()` from `src/utils/assetUrl.js`.
- If the repository is renamed or a custom domain is added, update `base` in `vite.config.js`; nothing else needs to change.

## Deployment

Every push to `main` builds and deploys the site through `.github/workflows/deploy.yml`.

One-time setup: in the repository, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**. If the workflow ran before this was enabled, re-run it from the **Actions** tab.
