# Nayab Seeds

Karachi-focused ecological ecommerce platform for native plants, medicinal herbs, and climate-adapted seeds.

## Stack

- React + TypeScript + Vite
- Tailwind CSS + Framer Motion
- Shopify Storefront API (optional)
- Deploy on Vercel

## Development

```bash
npm install
npm run dev
```

## Environment

Copy `.env.example` to `.env` and configure:

| Variable | Purpose |
|----------|---------|
| `VITE_SHOPIFY_STORE_DOMAIN` | Your `*.myshopify.com` domain |
| `VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN` | Storefront API public token |
| `VITE_WHATSAPP_NUMBER` | WhatsApp checkout (e.g. `923001234567`) |
| `VITE_SITE_URL` | Production URL for SEO |

Without Shopify env vars, the site uses the local product catalog and WhatsApp checkout.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage |
| `/shop` | Product catalog with filters |
| `/product/:handle` | Product detail |
| `/quiz` | Smart Plant Quiz |
| `/about` | Brand story |
| `/contact` | Contact + FAQ |
| `/native-karachi` | Future restoration hub (placeholder) |
| `/community` | Community preview (placeholder) |

## Shopify Setup

1. Create a custom app in Shopify Admin → enable Storefront API
2. Add product tags matching categories: `native`, `medicinal`, `beginner`, `heat-tolerant`, etc.
3. Match product handles to local enrichment data in `src/data/products.ts` for growing/ecological metadata

## Deploy

```bash
npm run build
```

Push to GitHub and connect to Vercel. SPA routing is configured in `vercel.json`.
