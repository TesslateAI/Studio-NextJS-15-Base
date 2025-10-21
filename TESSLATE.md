# Next.js 15 Fullstack Base

Modern Next.js 15 starter with App Router, React Server Components, API routes, TypeScript, and Tailwind CSS.

## Framework Configuration

**Framework**: Next.js
**Version**: 15.x
**Port**: 3000

## Development Server

**Start Command**:
```bash
npm install
npm run dev -- --hostname 0.0.0.0 --port 3000
```

**Stop Command**:
```bash
pkill -f "next dev"
```

## Environment Variables

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NODE_ENV=development
```

## Project Structure

```
/app                    # Next.js App Router
  /api                 # API Routes
  /components          # React Components
  layout.tsx           # Root Layout
  page.tsx             # Home Page
/public                # Static Assets
/styles                # Global Styles
next.config.js         # Next.js Configuration
package.json           # Dependencies
tsconfig.json          # TypeScript Config
tailwind.config.js     # Tailwind Config
```

## Features

- **App Router**: Modern Next.js routing with file-based navigation
- **API Routes**: Built-in backend API endpoints
- **React Server Components**: Automatic code splitting and streaming
- **TypeScript**: Full type safety
- **Tailwind CSS**: Utility-first styling
- **Hot Reload**: Instant updates during development

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- PostCSS

## Getting Started

1. The development server will start automatically
2. Access your app at the preview URL
3. Edit files in `/app` to see changes instantly
4. Create API routes in `/app/api/`

## Example API Route

Create `/app/api/hello/route.ts`:

```typescript
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Hello from Next.js API!' });
}
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js 15 Release Notes](https://nextjs.org/blog/next-15)
- [React Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)
