# Claude Context for herland.me

## Project Overview

This is Ole Herland's personal website - a "Vibe Engineered" project that leverages AI assistance while maintaining full developer control and understanding of all code. Content is hand-written to preserve tone and personality.

**Live Site:** https://herland.me

## Philosophy

- **Vibe Engineering:** Using AI to increase productivity while keeping "hands on the steering wheel"
- **Content Authenticity:** All content is hand-written, flaws included
- **Simplicity:** Intentionally plain and simple design to avoid splitting focus
- **No AI-Generated Content:** AI assists with code, but content remains human and authentic

## Tech Stack

- **Framework:** Astro 5.14.5
- **Styling:** Tailwind CSS 4.1.14
- **Template:** [zaggonaut](https://github.com/RATIU5/zaggonaut) - A minimal blog template
- **Package Manager:** pnpm 10.6.0
- **Hosting:** ploi.io
- **Content:** Content collections for blog posts/pages

## Project Structure

```
/
├── src/
│   ├── components/      # Reusable components
│   ├── layouts/         # Page layouts
│   └── pages/           # Route pages
├── content/             # Content collections (blog posts, etc.)
├── public/              # Static assets
├── images/              # Image assets
└── astro.config.mjs     # Astro configuration
```

## Development Commands

All commands use pnpm:

- `pnpm install` - Install dependencies
- `pnpm dev` - Start dev server (http://localhost:4321)
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm astro` - Run Astro CLI commands

## Important Notes

### Dependency Conflict
There's a known peer dependency warning: @astrojs/tailwind expects Tailwind CSS v3, but this project uses v4. This is intentional (from the template) and should work fine.

### Content Guidelines
- Keep the personal, authentic tone
- Don't auto-generate blog posts or content
- Main content/journaling happens at https://iniva.no (Ole's consulting business)

### Design Philosophy
- Maintain simplicity and speed
- Don't over-engineer solutions
- Focus on content over fancy features

## When Assisting

1. **Respect the "Vibe Engineering" approach** - Provide solutions that the developer can understand and maintain
2. **Don't generate content** - Only assist with code, structure, and technical implementation
3. **Keep it simple** - Avoid unnecessary complexity or over-engineering
4. **Preserve personality** - Don't sanitize or formalize the existing casual, authentic tone in content
5. **Ask before major changes** - Especially architectural decisions or dependency changes

## Related Projects

- **iniva.no** - Ole's consulting business where main journaling/content happens

## License

MIT License
