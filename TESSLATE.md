# TESSLATE.md - Project Context

> Context for AI agents working on this project.

## Framework Configuration

**Framework**: Next.js
**Version**: 15.x
**Port**: 3000

**Tech Stack:**
- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- App Router

## File Structure

```
app/
├── api/                 # API routes
├── components/          # React components
├── layout.tsx           # Root layout
└── page.tsx             # Home page
public/                  # Static assets
styles/                  # Global styles
next.config.js           # Next.js config
tailwind.config.js       # Tailwind config
```

## Development Server

**Start Command**:
```bash
npm install
npm run dev -- --hostname 0.0.0.0 --port 3000
```

**Production Build**:
```bash
npm run build
npm start
```
