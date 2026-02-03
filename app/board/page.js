'use client'

import { useState } from 'react'

export default function BoardPage() {
  const [posts] = useState([
    { id: 1, title: '불교용품 구매 후기', author: '사용자1', date: '2024-01-15', views: 45 },
    { id: 2, title: '염주 관리 방법', author: '사용자2', date: '2024-01-14', views: 32 },
    { id: 3, title: '향 종류별 특징', author: '사용자3', date: '2024-01-13', views: 28 },
    { id: 4, title: '불상 모시는 방법', author: '사용자4', date: '2024-01-12', views: 51 },
  ])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">게시판</h1>
        <button className="bg-amber-600 text-white px-6 py-2 rounded-md hover:bg-amber-700">
          글쓰기
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                번호
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                제목
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                작성자
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                작성일
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                조회수
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {posts.map((post) => (
              <tr key={post.id} className="hover:bg-gray-50 cursor-pointer">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{post.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{post.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{post.author}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{post.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{post.views}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex justify-center">
        <nav className="flex space-x-2">
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            이전
          </button>
          <button className="px-4 py-2 bg-amber-600 text-white rounded-md">1</button>
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            2
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            다음
          </button>
        </nav>
      </div>
    </div>
  )
}
