<h1 align="center">Welcome to Revista</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-2.7.6-blue.svg?cacheSeconds=2592000" />
</p>

> Photography Portfolio/Blog

### 🏠 [Homepage](https://github.com/erfianugrah/revista-3)

### ✨ [Demo](https://www.erfianugrah.com)

## Install

```sh
bun install
```

## Internal Usage

```sh
bun run dev
bun run build && bun run preview
```

## External Usage

Use Cloudflare Pages or Deno or [build a Docker image](/README.Docker.md), refer to [this](https://docs.astro.build/en/guides/deploy/) for more options.

### Cloudflare Pages build cache

This site uses Astro's experimental incremental static builds. In Cloudflare Pages, enable **Build caching** (the V2 build system is required) and use `bun run build` with `dist` as the build output directory. Pages automatically restores Astro's `node_modules/.astro` cache and Bun's package cache between builds; without that restored Astro cache, every page is rendered again.

Astro 7 requires Node.js `>=22.12.0`, so make sure the Pages build runs on Node 22: the repo's `.nvmrc` pins it (Cloudflare reads `.nvmrc`/`.node-version` automatically). If the build still reports an unsupported Node version, set a `NODE_VERSION` environment variable (e.g. `22.22.0`) in both the **Production** and **Preview** environments of the Pages project.

Content-derived detail and tag pages provide stable cache keys, so Astro reuses their previous output unless the relevant content or its imported code has changed. Use `bun run build -- --force` when a full rebuild is required.

## How it all works

- [Components readme](src/Components-README.md)
- [Layouts readme](src/Layouts-README.md)
- [Pages readme](src/Pages-README.md)
- [Content readme](src/Content-README.md)

## Author

👤 **Erfi Anugrah**

* Website: https://www.erfianugrah.com/
* Github: [@erfianugrah](https://github.com/erfianugrah)
* LinkedIn: [@erfianugrah](https://linkedin.com/in/erfianugrah)

## Show your support

Give a ⭐️ if this project helped you!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
