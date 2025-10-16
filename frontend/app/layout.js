"use client";

import "./globals.css";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { supabase } from "./supabase";

export default function RootLayout({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setIsLoggedIn(!!user);
    };
    checkAuth();
  }, []);

  return (
    <html lang="zh-CN">
      <body>
        <nav className="navbar">
          <div className="nav-container">
            <h1 className="nav-title">
              <Link href="/">诗光词影</Link>
            </h1>
            <div className="nav-links">
              <Link
                href="/poetry"
                className={`nav-link ${pathname === "/poetry" ? "active" : ""}`}
              >
                诗词鉴赏
              </Link>
              <Link
                href="/study"
                className={`nav-link ${pathname === "/study" ? "active" : ""}`}
              >
                学习记录
              </Link>
              <Link
                href="/user"
                className={`nav-link ${pathname === "/user" ? "active" : ""}`}
              >
                {isLoggedIn ? "个人中心" : "登录/注册"}
              </Link>
            </div>
          </div>
        </nav>
        <main className="main-content">{children}</main>
        <footer className="footer">
          <p>&copy; 2024 诗光词影 - AI赋能诗词鉴赏平台</p>
        </footer>
      </body>
    </html>
  );
}
