export default function Home() {
  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="text-center mb-24">
        <h1 className="text-4xl md:text-5xl font-light text-black mb-4 tracking-tight">
          감도 깊은 불교용품 셀렉트샵
        </h1>
        <p className="text-base text-gray-600 mb-12 font-light">
          정성스럽게 준비한 불교용품을 만나보세요
        </p>
      </section>

      {/* Category Section */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold text-black mb-8 tracking-tight">카테고리</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <a href="/products?category=염주" className="group">
            <div className="aspect-[3/4] bg-gray-100 mb-4 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <span className="text-6xl">📿</span>
              </div>
            </div>
            <h3 className="text-base font-medium text-black mb-1 group-hover:underline">염주</h3>
            <p className="text-sm text-gray-500 font-light">다양한 재질과 디자인</p>
          </a>
          <a href="/products?category=향" className="group">
            <div className="aspect-[3/4] bg-gray-100 mb-4 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <span className="text-6xl">🪔</span>
              </div>
            </div>
            <h3 className="text-base font-medium text-black mb-1 group-hover:underline">향</h3>
            <p className="text-sm text-gray-500 font-light">전통 방식으로 제작</p>
          </a>
          <a href="/products?category=불상" className="group">
            <div className="aspect-[3/4] bg-gray-100 mb-4 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <span className="text-6xl">🙏</span>
              </div>
            </div>
            <h3 className="text-base font-medium text-black mb-1 group-hover:underline">불상</h3>
            <p className="text-sm text-gray-500 font-light">정교하게 조각된 불상</p>
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16 border-t border-gray-200">
        <a
          href="/products"
          className="inline-block text-sm text-black font-medium hover:text-gray-600 transition-colors underline"
        >
          전체 상품 보기
        </a>
      </section>
    </div>
  )
}
