export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          불교용품 쇼핑몰에 오신 것을 환영합니다
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          정성스럽게 준비한 불교용품을 만나보세요
        </p>
        <a
          href="/products"
          className="bg-amber-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-amber-700"
        >
          상품 보러가기
        </a>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2 text-amber-700">염주</h3>
          <p className="text-gray-600">다양한 재질과 디자인의 염주</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2 text-amber-700">향</h3>
          <p className="text-gray-600">전통 방식으로 제작된 향</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2 text-amber-700">불상</h3>
          <p className="text-gray-600">정교하게 조각된 불상</p>
        </div>
      </section>
    </div>
  )
}
