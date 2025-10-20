# 📱 Zara Mobile - E-commerce Mobile Store

A modern, responsive e-commerce application for browsing and purchasing mobile devices. Built with React, TypeScript, and styled-components, featuring a clean mobile-first design.

## ✨ Features

- 🔍 **Product Search** - Real-time search with debouncing
- 📱 **Product Catalog** - Browse mobile devices
- 🛍️ **Shopping Cart** - Add products to cart with persistent storage
- 📄 **Product Details** - Detailed product information with specifications
- 🎨 **Color & Storage Options** - Multiple variants for each product
- 🔄 **Similar Products** - Discover related products
- 📊 **React Query** - Efficient data fetching and caching
- 🎯 **Redux Toolkit** - State management for cart
- 🧪 **Testing** - Unit tests with Jest and MSW
- 🎨 **Styled Components** - Component-scoped styling
- 🚀 **Code Quality** - ESLint, Prettier, and Husky pre-commit hooks

## 🛠️ Tech Stack

### Core

- **React 19** - UI library
- **TypeScript** - Type safety
- **React Router DOM 7** - Client-side routing
- **Styled Components 6** - CSS-in-JS styling

### State Management & Data Fetching

- **Redux Toolkit** - State management
- **React Query (TanStack Query)** - Server state management
- **React Query DevTools** - Development debugging

### Build Tools

- **Webpack 5** - Module bundler
- **TypeScript Loader** - TypeScript compilation
- **CSS Loader & Style Loader** - CSS processing
- **dotenv-webpack** - Environment variables
- **Copy Webpack Plugin** - Asset copying

### Development Tools

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **lint-staged** - Pre-commit linting
- **Jest** - Testing framework
- **MSW (Mock Service Worker)** - API mocking for tests

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- pnpm (recommended) or npm

### Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/josemc96/Zara-mobile.git
   cd Zara-mobile
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Create environment variables**

   Create a `.env` file in the root directory:

   ```env
   API_URL=https://your-api-url-here.com
   API_KEY=your-api-key-here
   ```

4. **Run the development server**

   ```bash
   pnpm dev
   # or
   npm run dev
   ```

   The application will be available at `http://localhost:3000`

## 🔧 Available Scripts

| Command              | Description                              |
| -------------------- | ---------------------------------------- |
| `pnpm dev`           | Start development server with hot reload |
| `pnpm build`         | Build for production                     |
| `pnpm start`         | Alias for `pnpm dev`                     |
| `pnpm test`          | Run tests once                           |
| `pnpm test:watch`    | Run tests in watch mode                  |
| `pnpm test:coverage` | Run tests with coverage report           |
| `pnpm lint`          | Run ESLint                               |
| `pnpm lint:fix`      | Run ESLint with auto-fix                 |
| `pnpm format`        | Format code with Prettier                |
| `pnpm format:check`  | Check code formatting                    |
| `pnpm code-quality`  | Run both linting and formatting checks   |

## 📁 Project Structure

```
src/
├── api/                           # API client and endpoints
│   ├── __test__/                 # API tests
│   │   ├── http.test.ts
│   │   └── products.test.ts
│   ├── http.ts                   # HTTP client with error handling
│   ├── keys.ts                   # React Query keys
│   ├── products.ts               # Product API endpoints
│   └── index.ts                  # API exports
│
├── components/                    # Reusable UI components
│   ├── cart/                     # Cart-related components
│   │   ├── cartFooter/           # Cart footer (mobile & desktop)
│   │   │   ├── CartFooter.tsx
│   │   │   ├── CartFooterMobile.tsx
│   │   │   ├── CartFooterDesktop.tsx
│   │   │   └── CartFooter.styles.ts
│   │   └── cartProductCard/      # Cart product card
│   │       ├── CartProductCard.tsx
│   │       └── CartProductCard.styles.ts
│   │
│   ├── layout/                   # Layout components
│   │   └── Layout.tsx            # Main layout wrapper
│   │
│   ├── navbar/                   # Navigation bar
│   │   ├── Navbar.tsx
│   │   └── navbar.styles.ts
│   │
│   ├── products/                 # Product-related components
│   │   ├── productCard/          # Product card for listings
│   │   │   ├── ProductCard.tsx
│   │   │   └── ProductCard.styles.ts
│   │   ├── productDetails/       # Product detail view
│   │   │   ├── ProductDetails.tsx
│   │   │   └── ProductDetails.styles.ts
│   │   ├── productSpecifications/ # Product specs display
│   │   │   ├── ProductSpecifications.tsx
│   │   │   └── ProductSpecifications.styles.ts
│   │   └── similarProducts/      # Similar products carousel
│   │       ├── SimilarProducts.tsx
│   │       └── SimilarProducts.styles.ts
│   │
│   └── index.ts                  # Component exports
│
├── features/                      # Feature-based Redux slices
│   ├── cart/                     # Shopping cart feature
│   │   ├── cartSlice.ts          # Redux slice (actions, reducers, selectors)
│   │   └── cartStorage.ts        # localStorage persistence
│   └── index.ts                  # Feature exports
│
├── pages/                         # Page components
│   ├── cartPage/                 # Shopping cart page
│   │   ├── CartPage.tsx
│   │   └── CartPage.styles.ts
│   ├── productDetailsPage/       # Product detail page
│   │   ├── ProductDetailsPage.tsx
│   │   └── ProductDetailsPage.styles.ts
│   ├── productList/              # Product listing page
│   │   ├── ProductsListPage.tsx
│   │   └── ProductsList.styles.ts
│   └── index.ts                  # Page exports
│
├── routes/                        # Routing configuration
│   └── Router.tsx                # App router setup
│
├── store/                         # Redux store configuration
│   ├── hooks.ts                  # Typed Redux hooks
│   └── index.ts                  # Store setup & configuration
│
├── styles/                        # Global styles and utilities
│   ├── grid.tsx                  # Grid system provider
│   ├── media.ts                  # Media query helpers
│   └── StyleConstants.ts         # Style constants
│
├── test/                          # Test utilities and mocks
│   ├── handlers.ts               # MSW request handlers
│   ├── jest.setup.ts             # Jest configuration
│   ├── server.ts                 # MSW server setup
│   └── setupTests.ts             # Test environment setup
│
├── types/                         # TypeScript type definitions
│   ├── CartFooter.types.ts       # Cart footer types
│   ├── images.d.ts               # Image module declarations
│   └── product.ts                # Product-related types
│
├── utils/                         # Utility functions
│   ├── __test__/                 # Utility tests
│   │   ├── money.test.ts
│   │   └── product-mappers.test.ts
│   ├── money.ts                  # Currency formatting
│   ├── product-mappers.ts        # Product data transformations
│   └── index.ts                  # Utility exports
│
├── GlobalProvider.tsx             # Global context providers (Redux, React Query)
└── index.tsx                      # Application entry point
```

### Architecture Pattern

This project follows a **feature-based architecture** with clear separation of concerns:

- **`/api`** - All API-related logic (HTTP client, endpoints, query keys)
- **`/components`** - Reusable UI components organized by domain (cart, products, layout, navbar)
- **`/features`** - Redux slices organized by feature (cart state management)
- **`/pages`** - Full page components that compose smaller components
- **`/store`** - Redux store configuration and typed hooks
- **`/styles`** - Shared styling utilities and constants
- **`/types`** - TypeScript type definitions
- **`/utils`** - Pure utility functions (formatters, mappers)

Each component folder contains:

- Component file (`.tsx`)
- Styles file (`.styles.ts`)

## 🌐 Environment Variables

The application requires the following environment variables:

| Variable  | Description            | Required |
| --------- | ---------------------- | -------- |
| `API_URL` | Base URL for the API   | Yes      |
| `API_KEY` | API authentication key | Yes      |

### Local Development

Create a `.env` file in the root directory with your values.

### Production (Vercel)

Add environment variables in your Vercel project:

1. Go to **Settings** → **Environment Variables**
2. Add `API_URL` and `API_KEY`
3. Select **Production**, **Preview**, and **Development**
4. Save and redeploy

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository**

   - Import your GitHub repository to Vercel
   - Vercel will auto-detect the build settings

2. **Configure environment variables**

   - Add `API_URL` and `API_KEY` in Vercel dashboard
   - Select all environments

3. **Deploy**

   - Push to `main` branch triggers automatic deployment
   - Or manually trigger from Vercel dashboard

4. **Build Configuration**
   - Build Command: `pnpm build`
   - Output Directory: `dist`
   - Install Command: `pnpm install`

### Manual Build

```bash
# Build for production
pnpm build

# The dist/ folder contains the production build
```

## 🧪 Testing

### Run Tests

```bash
pnpm test
```

### Watch Mode

```bash
pnpm test:watch
```

### Coverage Report

```bash
pnpm test:coverage
```

### Test Structure

- **Unit Tests**: Tests are co-located with source files in `__test__` folders
- **API Mocking**: Uses MSW (Mock Service Worker) for HTTP request mocking
- **Test Environment**: Jest with ts-jest for TypeScript support
- **Test Files**: Located in `src/api/__test__/` and `src/utils/__test__/`

### Current Test Coverage

- ✅ **API Layer**: HTTP client and product endpoints
- ✅ **Utilities**: Money formatting and product mappers
- ⚠️ **Components**: Not currently tested (unit tests only)

## 📝 Code Quality

This project uses several tools to maintain code quality:

### ESLint

- Configuration: `eslint.config.cjs`
- Runs on pre-commit and pre-push hooks
- Auto-fixes issues where possible

### Prettier

- Configuration: `.prettierrc`
- Ignores: `.prettierignore`
- Formats code on commit

### Git Hooks (Husky)

- **pre-commit**: Runs lint-staged (ESLint + Prettier)
- **pre-push**: Runs full code quality checks

## 🎨 Styling

### Styled Components

- **Component-scoped styles** - Each component has its own `.styles.ts` file
- **CSS-in-JS** - Dynamic styling with JavaScript
- **Theme variables** - CSS custom properties for colors and animations

### Responsive Design

The application uses a **mobile-first approach** with three main breakpoints:

| Breakpoint | Size    | Description          |
| ---------- | ------- | -------------------- |
| Mobile     | < 394px | Single column layout |
| Tablet     | ≥ 394px | Two column layout    |
| Desktop    | ≥ 834px | Five column layout   |

**Responsive Features:**

- Progressive image sizing (140px → 160px → 200px → 180px)
- Adaptive font sizes (9px → 10px → 12px → 14px)
- Responsive gaps and padding
- Touch-optimized interactions (44px minimum touch targets)
- Hover effects disabled on touch devices
- Layout containment to prevent shifts

**Media Query Helpers:**

```typescript
import { media } from "@/styles/media"

// Usage
${media.md` ... `}  // ≥ 394px
${media.lg` ... `}  // ≥ 834px
```

### Layout System

- **CSS Grid** for main layouts
- **Flexbox** for component internals
- **Aspect Ratios** for consistent image containers
- **Layout Containment** (`contain: layout style`) for performance

## 🔄 State Management

### Redux Toolkit

The application uses Redux Toolkit for client-side state management:

- **Cart State**: Shopping cart items stored as `Record<string, CartItem>` (keyed by `variantId`)
- **Actions**: `addItem`, `removeItem`, `setQty`
- **Selectors**: Memoized selectors for cart items, count, and total
- **Middleware**: Custom middleware for automatic localStorage persistence
- **Preloaded State**: Cart loads from localStorage on app initialization
- **Typed Hooks**: `useAppDispatch` and `useAppSelector` for type-safe state access

**Cart State Structure:**

```typescript
{
  items: {
    "productId__color__capacity": {
      productId: string
      variantId: string
      name: string
      brand: string
      color: string
      capacity: string
      unitPrice: number
      imageUrl?: string
      qty: number
    }
  }
}
```

### React Query (TanStack Query)

Manages server state with automatic caching and synchronization:

- **Product Data**: Fetches and caches product listings and details
- **Query Keys**: Centralized key management in `api/keys.ts`
- **Placeholder Data**: Smooth transitions with previous data while fetching
- **Stale Time**: 10 seconds for product data
- **DevTools**: Debug queries in development mode
- **Retry Logic**: Automatic retry with error handling

## 🪝 Hooks

### Custom Hooks

| Hook          | Description                                              |
| ------------- | -------------------------------------------------------- |
| `useDebounce` | Debounces search input to reduce API calls (350ms delay) |

### Redux Hooks

| Hook             | Description                                   |
| ---------------- | --------------------------------------------- |
| `useAppDispatch` | Typed dispatch hook for Redux actions         |
| `useAppSelector` | Typed selector hook for accessing Redux state |

### React Query Hooks

| Hook       | Description                                               |
| ---------- | --------------------------------------------------------- |
| `useQuery` | Fetches and caches product data with automatic refetching |

### React Router Hooks

| Hook          | Description                                |
| ------------- | ------------------------------------------ |
| `useNavigate` | Programmatic navigation between routes     |
| `useParams`   | Access route parameters (e.g., product ID) |
| `useLocation` | Access current route location              |

### React Built-in Hooks

| Hook               | Description                                     |
| ------------------ | ----------------------------------------------- |
| `useState`         | Manage local component state                    |
| `useEffect`        | Handle side effects and lifecycle events        |
| `useMemo`          | Memoize expensive computations                  |
| `useDeferredValue` | Defer non-urgent updates for better performance |

## 📱 Routes

| Path            | Component         | Description                        |
| --------------- | ----------------- | ---------------------------------- |
| `/`             | ProductsListPage  | Product catalog with search        |
| `/products/:id` | ProductDetailPage | Product details and specifications |
| `/cart`         | CartPage          | Shopping cart                      |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Commit Guidelines

- Follow conventional commit messages
- Run tests before committing
- Ensure code passes linting and formatting checks

## 👤 Author

**José Morcillo** - [GitHub](https://github.com/josemc96)

---

Made with ❤️ using React and TypeScript
