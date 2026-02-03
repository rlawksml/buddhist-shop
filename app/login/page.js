'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        // 토큰을 localStorage에 저장
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', JSON.stringify(data.user))

        // 메인 페이지로 리다이렉트
        router.push('/')
      } else {
        setError(data.error || '로그인에 실패했습니다.')
      }
    } catch (err) {
      setError('로그인 중 오류가 발생했습니다.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-[calc(100vh-14rem)] flex items-center justify-center py-12">
      <div className="max-w-sm w-full">
        <div className="mb-10">
          <h2 className="text-center text-2xl font-semibold text-black tracking-tight mb-2">
            로그인
          </h2>
          <p className="text-center text-sm text-gray-500 font-light">
            불교용품 쇼핑몰
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-normal text-gray-700 mb-2">
                이메일
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                disabled={loading}
                className="appearance-none block w-full px-3 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 text-sm focus:outline-none focus:border-black transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="name@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                disabled={loading}
                className="appearance-none block w-full px-3 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 text-sm focus:outline-none focus:border-black transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 border-gray-300"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm font-light text-gray-600">
                로그인 상태 유지
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-normal text-gray-600 hover:text-black transition-colors underline">
                비밀번호 찾기
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center items-center py-3 px-4 border border-black text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? '로그인 중...' : '로그인'}
            </button>
          </div>

          <div className="text-center text-sm pt-6">
            <span className="text-gray-600 font-light">계정이 없으신가요? </span>
            <a href="/register" className="font-medium text-black hover:text-gray-600 transition-colors underline">
              회원가입
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}
