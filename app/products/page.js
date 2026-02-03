export default function ProductsPage() {
  const products = [
    { id: 1, name: '백단향 염주', price: '50,000원', category: '염주' },
    { id: 2, name: '자단향 염주', price: '80,000원', category: '염주' },
    { id: 3, name: '전통 향', price: '15,000원', category: '향' },
    { id: 4, 이름: '백단향', price: '25,000원', category: '향' },
    { id: 5, name: '아미타불 불상', price: '150,000원', category: '불상' },
    { id: 6, name: '관세음보살 불상', price: '180,000원', category: '불상' },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">상품 목록</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400">상품 이미지</span>
            </div>
            <div className="p-4">
              <span className="text-sm text-amber-600 font-semibold">{product.category}</span>
              <h3 className="text-lg font-semibold text-gray-900 mt-1">{product.name}</h3>
              <p className="text-xl font-bold text-amber-700 mt-2">{product.price}</p>
              <button className="w-full mt-4 bg-amber-600 text-white py-2 rounded-md hover:bg-amber-700">
                장바구니 담기
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
