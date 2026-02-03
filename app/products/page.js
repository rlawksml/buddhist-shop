export default function ProductsPage() {
  const products = [
    { id: 1, name: '백단향 염주', price: '50,000', category: '염주', brand: '전통공방' },
    { id: 2, name: '자단향 염주', price: '80,000', category: '염주', brand: '전통공방' },
    { id: 3, name: '전통 향', price: '15,000', category: '향', brand: '향제작소' },
    { id: 4, name: '백단향', price: '25,000', category: '향', brand: '향제작소' },
    { id: 5, name: '아미타불 불상', price: '150,000', category: '불상', brand: '불상공방' },
    { id: 6, name: '관세음보살 불상', price: '180,000', category: '불상', brand: '불상공방' },
  ]

  return (
    <div className="py-12">
      <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
        <h1 className="text-2xl font-semibold text-black tracking-tight">전체 상품</h1>
        <select className="px-3 py-2 border border-gray-300 text-sm font-normal text-gray-700 focus:outline-none focus:border-black">
          <option>전체</option>
          <option>염주</option>
          <option>향</option>
          <option>불상</option>
        </select>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
        {products.map((product) => (
          <a key={product.id} href={`/products/${product.id}`} className="group">
            <div className="aspect-[3/4] bg-gray-100 mb-3 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-gray-300 group-hover:scale-105 transition-transform duration-300">
                <span className="text-5xl">🎁</span>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-gray-500 font-light">{product.brand}</p>
              <h3 className="text-sm font-normal text-black group-hover:underline">{product.name}</h3>
              <div className="flex items-baseline gap-2">
                <p className="text-base font-semibold text-black">{parseInt(product.price).toLocaleString()}원</p>
              </div>
              <p className="text-xs text-gray-500">무료배송</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
