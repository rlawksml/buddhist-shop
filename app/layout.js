import './globals.css'

export const metadata = {
  title: '불교용품 쇼핑몰',
  description: '불교용품 온라인 쇼핑몰',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <a href="/" className="text-2xl font-bold text-amber-700">
                  불교용품
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <a href="/products" className="text-gray-700 hover:text-amber-700">
                  상품
                </a>
                <a href="/board" className="text-gray-700 hover:text-amber-700">
                  게시판
                </a>
                <a href="/login" className="text-gray-700 hover:text-amber-700">
                  로그인
                </a>
                <a href="/register" className="bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700">
                  회원가입
                </a>
              </div>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="bg-gray-800 text-white mt-12">
          <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <p className="text-center">&copy; 2024 불교용품 쇼핑몰. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
