# Next.js 15 Base Template

A modern, production-ready Next.js 15 starter template for Tesslate Studio.

## Features

- **Next.js 15** with App Router
- **React 19** with Server Components
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **API Routes** for backend functionality
- **Hot Reload** during development

## What's Included

- Pre-configured Next.js setup
- Tailwind CSS integration
- TypeScript configuration
- Example API route (`/api/hello`)
- Responsive landing page
- ESLint configuration
- PostCSS setup

## Development

The development server starts automatically when you create a project from this base in Tesslate Studio.

Access your app at the preview URL provided in the IDE.

## Project Structure

```
/app
  /api
    /hello
      route.ts          # Example API route
  layout.tsx            # Root layout
  page.tsx              # Home page
  globals.css           # Global styles
next.config.js          # Next.js configuration
tailwind.config.js      # Tailwind configuration
tsconfig.json           # TypeScript configuration
package.json            # Dependencies
```

## API Routes

Create new API routes in `/app/api/`. Example:

```typescript
// app/api/users/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ users: [] });
}
```

## Styling

This template uses Tailwind CSS. Add custom styles in `app/globals.css` or use Tailwind utilities directly in your components.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## Tesslate Studio

This base is optimized for use with Tesslate Studio. The `TESSLATE.md` file contains configuration for automatic dev server setup.
