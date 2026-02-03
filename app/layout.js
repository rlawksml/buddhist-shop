import './globals.css'

export const metadata = {
  title: '불교용품 쇼핑몰',
  description: '불교용품 온라인 쇼핑몰',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-white" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
        <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
          <div className="max-w-[1000px] mx-auto px-6 sm:px-8 lg:px-12">
            <div className="flex justify-between items-center h-14">
              <div className="flex items-center">
                <a href="/" className="text-lg font-bold text-black tracking-tight hover:text-gray-600 transition-colors">
                  불교용품
                </a>
              </div>
              <div className="flex items-center gap-6">
                <a href="/products" className="text-sm font-normal text-gray-800 hover:text-black transition-colors">
                  상품
                </a>
                <a href="/board" className="text-sm font-normal text-gray-800 hover:text-black transition-colors">
                  게시판
                </a>
                <a href="/login" className="text-sm font-normal text-gray-800 hover:text-black transition-colors">
                  로그인
                </a>
                <a href="/register" className="text-sm text-black hover:text-gray-600 transition-colors font-medium underline">
                  회원가입
                </a>
              </div>
            </div>
          </div>
        </nav>
        <main className="max-w-[1000px] mx-auto px-6 sm:px-8 lg:px-12">
          {children}
        </main>
        <footer className="border-t border-gray-200 bg-gray-50 mt-32">
          <div className="max-w-[1000px] mx-auto px-6 py-12 sm:px-8 lg:px-12">
            <div className="space-y-6">
              <div className="flex gap-8 text-xs text-gray-600">
                <a href="#" className="hover:text-black transition-colors">고객센터</a>
                <a href="#" className="hover:text-black transition-colors">이용약관</a>
                <a href="#" className="hover:text-black transition-colors">개인정보처리방침</a>
              </div>
              <p className="text-xs text-gray-500">
                (주)불교용품 | 대표이사: 홍길동 | 사업자등록번호: 000-00-00000<br />
                서울시 강남구 테헤란로 123 | 통신판매업신고: 제2024-서울강남-00000호
              </p>
              <p className="text-xs text-gray-400">&copy; 2024 불교용품. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
