# sx - sveltekit + x = everything

Everything you need to build, powered by

1. [`SvelteKit`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte)
2. [`Cloudflare Pages`](https://developers.cloudflare.com/pages/framework-guides/deploy-a-svelte-site/) + [`D1 Database`](https://developers.cloudflare.com/d1/)
3. [`Drizzle`](https://orm.drizzle.team/) + [`DrizzleKit`](https://github.com/drizzle-team/drizzle-orm/tree/main/packages/drizzle-kit)
4. [`Auth.js`](https://authjs.dev/getting-started/installation?framework=SvelteKit)
5. [`Sentry`](https://docs.sentry.io/platforms/javascript/guides/sveltekit/)

## Todos

- [ ] Configure preview environments
- [ ] Make sentry DSN private
- [ ] Fix sentry reporting in production (set NODE_ENV=production)
- [ ] Add local/remote variants of database commands
- [ ] Write tutorial on automatic deployments
- [ ] Write tutorial on initialize remote database

## Setup

1. Create a secret auth token with `bunx auth secret`

## Issues and pitfalls

### Illegal invocation with @authjs/core>=0.36

Fixed by downgrading to `@auth/core^=0.35.0`, see https://github.com/nextauthjs/next-auth/issues/11999 and [original error message on cloudflare](https://developers.cloudflare.com/workers/observability/errors/#illegal-invocation-errors).

### AUTH_TRUST_HOST does not work with Cloudflare

Setting `AUTH_TRUST_HOST=true` does not work, fixed by adding `trustHost: true` to `src/auth.ts`, see https://github.com/nextauthjs/next-auth/discussions/6071.

### Sentry Cloudflare adapter is broken

Use [`@jill64/sentry-sveltekit-cloudflare`](https://github.com/jill64/sentry-sveltekit-cloudflare) instead of `@sentry/sveltekit`.
Because build fails with `Could not resolve "$app/stores"` and more issues, see https://github.com/getsentry/sentry-javascript/issues/8291.

## Reading material

1. Setup Cloudflare D1 with DrizzleKit
   1. https://github.com/drizzle-team/drizzle-orm/discussions/1545
   2. https://kevinkipp.com/blog/going-full-stack-on-astro-with-cloudflare-d1-and-drizzle/
   3. https://www.drizzlekit.com/docs/guides/cloudflare-pages
   4. https://orm.drizzle.team/docs/guides/d1-http-with-drizzle-kit
   5. https://developers.cloudflare.com/d1/examples/d1-and-sveltekit/
   6. https://developers.cloudflare.com/pages/framework-guides/deploy-a-svelte-site/
   7. https://developers.cloudflare.com/d1/build-with-d1/local-development/#related-resources
   8. https://kit.svelte.dev/docs/adapter-cloudflare
   9. https://orm.drizzle.team/docs/get-started/d1-new

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
