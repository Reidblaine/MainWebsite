# Reid Blaine's Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and TailwindCSS.

## Features

- 🎨 Modern and clean design
- 🌙 Dark mode support
- 📱 Fully responsive layout
- ⚡ Fast and optimized performance
- 🎭 Smooth animations with Framer Motion
- 📄 Professional CV section
- 👤 About Me section
- 🧠 Projects showcase
- 🔍 SEO optimized

## Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [TailwindCSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [next-themes](https://github.com/pacocoursey/next-themes) - Dark mode support

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
src/
├── app/                    # App router pages
│   ├── page.tsx           # Home page
│   ├── cv/                # CV page
│   ├── about/             # About page
│   └── projects/          # Projects page
├── components/            # React components
│   ├── Navigation.tsx     # Navigation bar
│   └── ThemeToggle.tsx    # Dark mode toggle
└── lib/                   # Utility functions and hooks
```

## Customization

- Update your personal information in the respective page components
- Modify the color scheme in `tailwind.config.js`
- Add or remove projects in the projects array
- Customize animations in the Framer Motion components

## Deployment

The site can be easily deployed on [Vercel](https://vercel.com/):

```bash
npm run build
# or
yarn build
# or
pnpm build
```

## Contributing

Feel free to open issues and pull requests for any improvements or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.