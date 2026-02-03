'use client'

import { useState } from 'react'

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.')
      return
    }
    console.log('회원가입:', formData)
    // 회원가입 로직 구현 필요
  }

  return (
    <div className="min-h-[calc(100vh-14rem)] flex items-center justify-center py-12">
      <div className="max-w-sm w-full">
        <div className="mb-10">
          <h2 className="text-center text-2xl font-semibold text-black tracking-tight mb-2">
            회원가입
          </h2>
          <p className="text-center text-sm text-gray-500 font-light">
            새로운 계정 만들기
          </p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-normal text-gray-700 mb-2">
                이름
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="appearance-none block w-full px-3 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 text-sm focus:outline-none focus:border-black transition-all"
                placeholder="홍길동"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-normal text-gray-700 mb-2">
                이메일
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none block w-full px-3 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 text-sm focus:outline-none focus:border-black transition-all"
                placeholder="name@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-normal text-gray-700 mb-2">
                전화번호
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className="appearance-none block w-full px-3 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 text-sm focus:outline-none focus:border-black transition-all"
                placeholder="010-1234-5678"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-normal text-gray-700 mb-2">
                비밀번호
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none block w-full px-3 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 text-sm focus:outline-none focus:border-black transition-all"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-normal text-gray-700 mb-2">
                비밀번호 확인
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className="appearance-none block w-full px-3 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 text-sm focus:outline-none focus:border-black transition-all"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-black text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none transition-all"
            >
              회원가입
            </button>
          </div>

          <div className="text-center text-sm pt-6">
            <span className="text-gray-600 font-light">이미 계정이 있으신가요? </span>
            <a href="/login" className="font-medium text-black hover:text-gray-600 transition-colors underline">
              로그인
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}
