// src/components/shared/Navbar.tsx
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { useAuth } from '@/features/auth/hooks/use-auth';

export const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight">
          {siteConfig.name}
        </Link>
        <nav className="flex items-center gap-4">
          <Button asChild variant="ghost" size="sm">
            <Link href="/login">Đăng nhập</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/register">Đăng ký</Link>
          </Button>
          <span className="text-sm text-gray-700">
            Xin chào, {user?.fullName}
          </span>
          <button
            onClick={logout}
            className="text-red-500 text-sm hover:underline"
          >
            Đăng xuất
          </button>
        </nav>
      </div>
    </header>
  );
};
