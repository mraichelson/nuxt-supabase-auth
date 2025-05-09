Manual things...

- [This tutorial series](https://masteringnuxt.com/blog/setting-up-supabase-auth-with-nuxt-3) was helpful, but it tries to use a `useSupabaseAuthClient()` composable that doesn't actually exist. Substituting `useSupabaseClient()` instead works as intended.
- Add the resolution for the `cookie` package in `package.json` per the thread [over here for `nuxt-modules/supabase#466`](https://github.com/nuxt-modules/supabase/issues/466)

<details>
<summary>Nuxt Minimal Starter</summary>

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

</details>
