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
- 🧪 **Testing** - Unit tests with Jest and React Testing Library
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
- **React Testing Library** - Component testing
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
├── api/                    # API client and endpoints
│   ├── http.ts            # HTTP client with error handling
│   ├── keys.ts            # React Query keys
│   └── products.ts        # Product API endpoints
├── components/            # Reusable components
│   └── navbar/           # Navigation bar
├── features/             # Feature-based modules
│   ├── cart/            # Shopping cart feature
│   │   ├── cartSlice.ts
│   │   ├── cartStorage.ts
│   │   └── components/
│   └── products/        # Products feature
│       └── components/
│           ├── productCard/
│           ├── productDetails/
│           ├── productSpecifications/
│           └── similarProducts/
├── pages/               # Page components
│   ├── cartPage/
│   ├── productDetailsPage/
│   └── productList/
├── routes/             # Routing configuration
│   ├── Layout.tsx
│   └── Router.tsx
├── store/             # Redux store configuration
│   ├── hooks.ts
│   └── index.ts
├── styles/            # Global styles and constants
│   ├── grid.tsx
│   ├── media.ts
│   └── StyleConstants.ts
├── test/              # Test utilities and mocks
│   ├── handlers.ts
│   ├── jest.setup.ts
│   ├── server.ts
│   └── setupTests.ts
├── types/             # TypeScript type definitions
│   ├── images.d.ts
│   └── product.ts
├── utils/             # Utility functions
│   ├── money.ts
│   └── product-mappers.ts
├── GlobalProvider.tsx # Global context providers
└── index.tsx          # Application entry point
```

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

- Tests are co-located with source files in `__test__` folders
- API mocking uses MSW (Mock Service Worker)
- Component tests use React Testing Library

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

- **Styled Components** for component-scoped styles
- **Responsive Design** with mobile-first approach
- **CSS Grid** for layouts
- **Media Queries** for breakpoints
- **Theme Constants** for consistent design

## 🔄 State Management

### Redux Toolkit

- **Cart State**: Shopping cart items and totals
- **Local Storage**: Persistent cart data

### React Query

- **Server State**: Product data, caching, and synchronization
- **Query Keys**: Centralized key management
- **DevTools**: Debug queries in development

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
