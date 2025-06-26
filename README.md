# ⚔️ trhgatu-inf-nextjs-frontend-template

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Redux](https://img.shields.io/badge/Redux_Toolkit-764abc?style=for-the-badge&logo=redux&logoColor=white)

**A modern, production-ready Next.js 14 template with TypeScript, TailwindCSS, ShadCN/UI, Redux Toolkit, and automated CI/CD pipeline.**

[🚀 Quick Start](#-quick-start) • [📖 Documentation](#-features) • [🤝 Contributing](#-contributing) • [💬 Support](#-support)

</div>

---

## ✨ Features

<table>
<tr>
<td>

**🏗️ Architecture**
- Next.js 14 App Router
- TypeScript for type safety
- Modular folder structure
- Feature-based organization

</td>
<td>

**🎨 UI/Styling**
- TailwindCSS utility-first
- ShadCN/UI components
- Responsive design
- Dark mode ready

</td>
</tr>
<tr>
<td>

**⚡ State Management**
- Redux Toolkit setup
- Async thunks configured
- Type-safe hooks
- Persistent state

</td>
<td>

**🛠️ Developer Experience**
- ESLint + Prettier
- Husky git hooks
- GitHub Actions CI/CD
- Hot reload

</td>
</tr>
</table>

---

## 🧠 Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Styling** | TailwindCSS, ShadCN/UI |
| **State Management** | Redux Toolkit, RTK Query |
| **HTTP Client** | Axios |
| **Validation** | Zod |
| **Testing** | Jest, React Testing Library |
| **Linting** | ESLint, Prettier |
| **CI/CD** | GitHub Actions |

---

## 📁 Project Structure

```
trhgatu-inf-nextjs-frontend-template/
├── 📁 src/
│   ├── 📁 app/                    # Next.js App Router
│   │   ├── 📄 layout.tsx          # Root layout
│   │   ├── 📄 page.tsx            # Home page
│   │   ├── 📄 loading.tsx         # Global loading UI
│   │   ├── 📄 not-found.tsx       # 404 page
│   │   └── 📁 (auth)/             # Auth route group
│   │       └── 📄 login/page.tsx  # Login page
│   ├── 📁 components/
│   │   ├── 📁 shared/             # Reusable components
│   │   │   ├── 📄 Navbar.tsx      # Navigation component
│   │   │   └── 📄 Footer.tsx      # Footer component
│   │   └── 📁 ui/                 # ShadCN UI components
│   ├── 📁 config/                 # Configuration files
│   │   └── 📄 site.ts             # Site configuration
│   ├── 📁 constants/              # Application constants
│   │   └── 📄 routes.ts           # Route definitions
│   ├── 📁 features/               # Feature modules
│   │   └── 📁 auth/               # Authentication feature
│   │       ├── 📄 hooks.ts        # Auth hooks
│   │       ├── 📄 services.ts     # Auth API services
│   │       └── 📄 schemas.ts      # Validation schemas
│   ├── 📁 lib/                    # Utility libraries
│   │   ├── 📄 axios.ts            # Axios configuration
│   │   └── 📄 utils.ts            # Helper functions
│   ├── 📁 store/                  # Redux store
│   │   ├── 📄 index.ts            # Store configuration
│   │   ├── 📄 provider.tsx        # Redux provider
│   │   └── 📁 slices/             # Redux slices
│   └── 📁 types/                  # TypeScript definitions
├── 📁 .github/workflows/          # GitHub Actions
│   └── 📄 ci.yml                  # CI/CD pipeline
├── 📄 next.config.ts              # Next.js configuration
├── 📄 tailwind.config.ts          # TailwindCSS configuration
├── 📄 tsconfig.json               # TypeScript configuration
└── 📄 package.json                # Dependencies & scripts
```

---

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed:
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/trhgatu/trhgatu-inf-nextjs-frontend-template.git
   cd trhgatu-inf-nextjs-frontend-template
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see your application.

---

## 🔐 Authentication Module

The template includes a complete authentication system:

- **Login Page**: `/login` with form validation
- **Protected Routes**: Automatic redirection for unauthenticated users
- **State Management**: Redux-powered auth state
- **Type Safety**: Full TypeScript support
- **Validation**: Zod schema validation

### Usage Example

```typescript
import { useAuth } from '@/features/auth/hooks';

function ProtectedComponent() {
  const { user, isAuthenticated, login, logout } = useAuth();
  
  if (!isAuthenticated) {
    return <div>Please login to continue</div>;
  }
  
  return <div>Welcome, {user?.name}!</div>;
}
```

---

## 🎨 UI Components

Built with [ShadCN/UI](https://ui.shadcn.com/) for maximum flexibility:

```bash
# Add new components
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add form
```

### Custom Components

The `components/shared/` directory contains application-specific components:

- **Navbar**: Responsive navigation with auth integration
- **Footer**: Site footer with links and branding
- **Layout**: Page layout wrapper

---

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint issues |
| `npm run format` | Format code with Prettier |
| `npm run type-check` | Run TypeScript compiler |
| `npm run test` | Run tests |

---

## 🧪 CI/CD Pipeline

Automated workflow with GitHub Actions (`.github/workflows/ci.yml`):

```yaml
✅ Code Quality Checks
  ├── ESLint validation
  ├── Prettier formatting
  ├── TypeScript compilation
  └── Unit tests

✅ Build & Deploy
  ├── Production build
  ├── Build artifact caching
  └── Deployment (when configured)
```

The pipeline runs on:
- Push to `main` branch
- Pull requests to `main`
- Manual workflow dispatch

---

## 📦 Key Dependencies

### Core
- **next**: ^14.0.0
- **react**: ^18.0.0
- **typescript**: ^5.0.0

### Styling
- **tailwindcss**: ^3.3.0
- **@tailwindcss/forms**: ^0.5.0
- **class-variance-authority**: ^0.7.0

### State Management
- **@reduxjs/toolkit**: ^1.9.0
- **react-redux**: ^8.1.0

### Validation & HTTP
- **zod**: ^3.22.0
- **axios**: ^1.5.0

### Development
- **eslint**: ^8.50.0
- **prettier**: ^3.0.0
- **husky**: ^8.0.0

---

## 🎯 Customization

### Adding New Features

1. Create a new feature directory under `src/features/`
2. Add Redux slice in `src/store/slices/`
3. Create API services in the feature directory
4. Add routes to `src/constants/routes.ts`

### Styling Customization

1. **Colors**: Edit `tailwind.config.ts`
2. **Components**: Modify ShadCN components in `components/ui/`
3. **Global Styles**: Update `src/app/globals.css`

### Environment Configuration

Create `.env.local` for local development:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
NEXT_PUBLIC_APP_NAME=My App
DATABASE_URL=your_database_url
```

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel --prod
```

### Docker
```bash
docker build -t my-nextjs-app .
docker run -p 3000:3000 my-nextjs-app
```

### Other Platforms
- **Netlify**: Connect your GitHub repository
- **Railway**: One-click deployment
- **AWS/GCP**: Use provided Dockerfiles

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 💬 Support

- 📧 **Email**: [trananhtu1112003@gmail.com](mailto:trananhtu1112003@gmail.com)
- 🐛 **Issues**: [GitHub Issues](https://github.com/trhgatu/trhgatu-inf-nextjs-frontend-template/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/trhgatu/trhgatu-inf-nextjs-frontend-template/discussions)

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) team for the amazing framework
- [Vercel](https://vercel.com/) for hosting and deployment platform
- [ShadCN](https://ui.shadcn.com/) for the beautiful UI components
- [TailwindCSS](https://tailwindcss.com/) for the utility-first CSS framework

---

<div align="center">

**Built with ❤️ by [Infinity (trhgatu)](https://github.com/trhgatu)**

*"Code is how I reflect my soul."*

⭐ **Star this repo if you found it helpful!**

</div>
