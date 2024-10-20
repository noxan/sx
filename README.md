# create-svelte

Everything you need to build, powered by
1. [`SvelteKit`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).
2. Cloudflare Pages + D1 Database
3. DrizzleKit
4. Auth.js
5. [`Sentry`](https://docs.sentry.io/platforms/javascript/guides/sveltekit/)

## Setup

1. Create a secret auth token with `bunx auth secret`

## Issues and pitfalls

### Illegal invocation with @authjs/core>=0.36

Fixed by downgrading to `@auth/core^=0.35.0`, see https://github.com/nextauthjs/next-auth/issues/11999 and [original error message on cloudflare](https://developers.cloudflare.com/workers/observability/errors/#illegal-invocation-errors).

### AUTH_TRUST_HOST does not work with Cloudflare

Setting `AUTH_TRUST_HOST=true` does not work, fixed by adding `trustHost: true` to `src/auth.ts`, see https://github.com/nextauthjs/next-auth/discussions/6071.

### Sentry Cloudflare adapter is broken

1. Build fails with
    ```
    ✘ [ERROR] Could not resolve "$app/stores"

        node_modules/@sentry/sveltekit/build/esm/client/browserTracingIntegration.js:1:33:
          1 │ import { page, navigating } from '$app/stores';
            ╵                                  ~~~~~~~~~~~~~
    ```

2. https://github.com/getsentry/sentry-javascript/issues/8291

## Reading material

1. Setup Cloudflare D1 with DrizzleKit
   1. https://www.drizzlekit.com/docs/guides/cloudflare-pages
   2. https://orm.drizzle.team/docs/guides/d1-http-with-drizzle-kit
   3. https://developers.cloudflare.com/d1/examples/d1-and-sveltekit/
   4. https://developers.cloudflare.com/pages/framework-guides/deploy-a-svelte-site/
   5. https://developers.cloudflare.com/d1/build-with-d1/local-development/#related-resources
   6. https://kit.svelte.dev/docs/adapter-cloudflare
   7. https://orm.drizzle.team/docs/get-started/d1-new

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
