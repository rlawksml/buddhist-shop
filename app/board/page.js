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
    <div className="py-12">
      <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
        <h1 className="text-2xl font-semibold text-black tracking-tight">게시판</h1>
        <button className="text-sm text-black hover:text-gray-600 transition-colors font-medium underline">
          글쓰기
        </button>
      </div>

      <div className="border-t border-gray-200">
        {posts.map((post) => (
          <div key={post.id} className="border-b border-gray-200 py-5 hover:bg-gray-50 cursor-pointer transition-colors group">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-base font-normal text-black mb-2 group-hover:underline">{post.title}</h3>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span>{post.author}</span>
                  <span>·</span>
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>조회 {post.views}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <nav className="flex gap-2">
          <button className="px-3 py-1 text-sm font-normal text-gray-500 hover:text-black transition-colors">
            이전
          </button>
          <button className="px-3 py-1 text-sm font-medium text-black underline">1</button>
          <button className="px-3 py-1 text-sm font-normal text-gray-500 hover:text-black transition-colors">
            2
          </button>
          <button className="px-3 py-1 text-sm font-normal text-gray-500 hover:text-black transition-colors">
            다음
          </button>
        </nav>
      </div>
    </div>
  )
}
