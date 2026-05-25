# Nayab Seeds – Karachi Ecological Seed Store

A modern React + Vite web app that lets users browse, search, and purchase native, medicinal, and heat‑tolerant seeds for Karachi gardening.  
The MVP includes:

- Product listing & detail pages
- Shopping cart with quantity controls
- Multi‑item Shopify checkout (when Shopify credentials are provided) **or** WhatsApp fallback
- SEO component with rich JSON‑LD schema
- Light/Dark theme support

## 📦 Prerequisites

- **Node.js** ≥ 18 (recommended LTS)
- **npm**, **pnpm**, or **yarn** (any package manager works)
- (Optional) A Shopify store with Storefront API access if you want real checkout

## 🚀 Getting Started Locally

### 1. Clone the repository

```bash
git clone https://github.com/your-username/nayab-seeds.git
cd nayab-seeds
```

### 2. Install dependencies

```bash
# Using npm (default)
npm install

# Or with pnpm
pnpm install

# Or with yarn
yarn install
```

### 3. Set up environment variables

Create a **`.env.local`** file in the project root (next to `.env.example`).  
Only variables prefixed with `VITE_` are read by Vite.

```dotenv
# .env.local
VITE_SITE_URL=http://localhost:5173

# WhatsApp number used for the fallback checkout (replace with your test number)
VITE_WHATSAPP_NUMBER=923001234567

# ---- Optional: Shopify configuration ----
# If you have a Shopify store, fill these in to enable real checkout.
# Otherwise the app will fall back to the WhatsApp order flow.
VITE_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-storefront-access-token
VITE_SHOPIFY_API_VERSION=2024-10
```

> **Tip:** Leaving the Shopify variables empty is perfectly fine for the MVP; the checkout button will open a pre‑filled WhatsApp chat instead.

### 4. Run the development server

```bash
npm run dev
```

Vite will start the dev server (by default on **http://localhost:5173**).  
Open that URL in your browser. You should see the home page and be able to:

- Browse the shop (`/shop`)
- View product details (`/product/:handle`)
- Add items to the cart
- Open the cart drawer, adjust quantities, and click **Proceed to Checkout** (Shopify or WhatsApp)

### 5. (Optional) Preview a production build

```bash
npm run build   # creates a static bundle in ./dist
npm run preview # serves the built files locally (http://localhost:4173)
```

### 6. Common troubleshooting

| Problem | Fix |
|---------|-----|
| `vite` command not found | Ensure you ran `npm install` and that `node_modules/.bin` is in your PATH. |
| Missing env variables | Double‑check `.env.local`. Vite only loads variables that start with `VITE_`. |
| Cart clears on refresh | The MVP stores the cart only in React state. Add persistent storage (e.g., `localStorage`) later if needed. |
| Shopify checkout errors | Verify `VITE_SHOPIFY_STORE_DOMAIN` and `VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN` are correct and that the Storefront API is enabled in your Shopify admin. |
| CORS errors when calling Shopify | Add `http://localhost:5173` (or your dev URL) to the allowed origins in the Shopify Storefront API settings. |

## 🛠️ Project Structure (relevant files)

```
src/
├─ components/
│  ├─ ecommerce/CartDrawer.tsx      # Cart UI & checkout button
│  └─ shared/Seo.tsx               # SEO meta tags & JSON‑LD
├─ context/CartContext.tsx          # Cart state, wishlist, checkout logic
├─ lib/shopify/                     # Shopify client, queries, cart helpers
│  ├─ client.ts
│  ├─ queries.ts
│  └─ cart.ts
├─ pages/
│  ├─ ProductPage.tsx              # Product detail view
│  └─ ShopPage.tsx                 # Product listing, search, filter
├─ config/
│  ├─ seo.ts                       # Keywords, business facts, page SEO
│  └─ site.ts                      # Site‑wide config used by SEO component
└─ main.tsx                        # App entry point (router, helmet, cart provider)
```

---

You’re now ready to run the Nayab Seeds website locally. If you encounter any errors, copy the exact console output and let me know—I can help adjust the code or configuration. Happy gardening!````