import "./globals.css";

export const metadata = {
  title: "诗光词影 - AI赋能诗词鉴赏平台",
  description: "基于AI的智能诗词鉴赏与学习平台",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>
        <nav className="navbar">
          <div className="nav-container">
            <h1 className="nav-title">诗光词影</h1>
            <div className="nav-links">
              <a href="/poetry" className="nav-link">
                诗词鉴赏
              </a>
              <a href="/learning-records" className="nav-link">
                学习记录
              </a>
              <a href="/user" className="nav-link">
                个人中心
              </a>
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

