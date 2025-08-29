# AGENTS.md

## Build/Test Commands
- **Dev**: `npm run dev` (Vite development server)
- **Build**: `npm run build` (Vite production build)
- **Lint**: `npm run lint` (ESLint check)
- **Preview**: `npm run preview` (Preview production build)

## Architecture
- React 19.1+ portfolio app with React Router for routing
- Vite build tool with Tailwind CSS v4.x for styling
- Path alias `@/` resolves to `src/` directory
- Key directories: `/src/components`, `/src/pages`, `/src/lib`

## Code Style
- Use named exports for components: `export const ComponentName = () => {}`
- Import React hooks explicitly: `import { useEffect, useState } from 'react'`
- Use `@/` alias for imports: `import { cn } from '@/lib/utils'`
- TailwindCSS for styling with `cn()` utility from `@/lib/utils`
- ESLint enforced with React hooks plugin
- No unused vars except those matching pattern `^[A-Z_]`
- JSX components in `.jsx` files
- Custom CSS animations defined in `@theme` blocks
- Use Lucide React for icons

## Testing
- No test framework currently configured
