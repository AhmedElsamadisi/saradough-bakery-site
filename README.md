# SaraDough Bakery

An Astro storefront for SaraDough Bakery in Bayonne, New Jersey.

## Local development

```sh
npm install
npm run dev
```

## Validate

```sh
npm run validate
```

The `main` branch is the source of truth for the live Cloudflare Pages site at `https://saradough.shop/`.

```sh
npm run deploy:cloudflare
```

## Subscription checkout

The bread club call to action currently sends customers to `@saradough.bakery` to confirm flavor and shipping. Replace that URL with a recurring checkout link when the bakery's payment processor is ready.
