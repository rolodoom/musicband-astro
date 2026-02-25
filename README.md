# MusicBandAstro

MusicBandAstro is an **SEO-ready one-page** template for musicians, built with **Astro** and **Tailwind CSS**. It includes sections for Videos, Music, Our Story, The Band, Gallery, and Contact. The design is loosely inspired by [Agency](https://startbootstrap.com/theme/agency).

> **Project history:** Originally created as a Pug template, then migrated to React, it has now been rebuilt in Astro for a lightweight and maintainable setup.

[![MusicBandSstro](public/images/og_image.png)](https://github.com/rolodoom/musicband-astro)

## Status

[![GitHub license](https://img.shields.io/badge/license-GPL--3.0-blue)](https://raw.githubusercontent.com/rolodoom/musicband-astro/master/LICENSE)

## ✨ Features

- SEO-ready and performance optimized.
- Responsive, works on all devices.
- Built with Astro + Tailwind CSS for maximum flexibility.
- Easy to customize and extend to fit your needs.

## 🚀 Getting Started

1. Create a new project using this template:

   ```bash
   pnpm create astro@latest -- --template rolodoom/musicband-astro
   ```

2. Go to your project folder and install dependencies:

   ```bash
   cd your-project-name
   pnpm i
   ```

3. Start the development server:

   ```bash
   pnpm dev
   ```

4. Open your browser and visit `http://localhost:4321` to see your project live.

## 🧞 Available Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 🔧 Configuration

### SEO Configuration

The template includes a `BaseHead.astro` component that handles all SEO-related meta tags. It supports:

- Title and description meta tags
- Open Graph meta tags for social sharing
- Twitter Card meta tags
- Canonical URL
- Favicon

### Astro config:

```js
// astro.config.mjs
export default defineConfig({
  site: "https://example.com/", // Replace with your own URL
});
```

🔧 Replace `"https://example.com/"` with your site’s URL before deploying.

### Tailwind Configuration

Tailwind CSS is pre-configured and ready to use. Customization can be done through the Astro configuration file (`astro.config.mjs`).

## 🐛 Bugs and Issues

Have a bug or an issue with this template? [Open a new issue](https://github.com/rolodoom/musicband-astro/issues) here on GitHub.

## 📝 License

This code is released under the [GPL-3.0](https://raw.githubusercontent.com/rolodoom/musicband-astro/master/LICENSE) license, which means you have the four freedoms to run, study, share, and modify the software. Any derivative work must be distributed under the same or equivalent license terms.
