import { NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma.js'
import bcrypt from 'bcryptjs'

export async function POST(request) {
  try {
    const { email, name, phone, password } = await request.json()

    // 입력 검증
    if (!email || !name || !password) {
      return NextResponse.json(
        { success: false, error: '필수 정보를 모두 입력해주세요.' },
        { status: 400 }
      )
    }

    // 이메일 중복 확인
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return NextResponse.json(
        { success: false, error: '이미 등록된 이메일입니다.' },
        { status: 400 }
      )
    }

    // 비밀번호 해싱
    const hashedPassword = await bcrypt.hash(password, 10)

    // 사용자 생성
    const user = await prisma.user.create({
      data: {
        email,
        name,
        phone: phone || null,
        password: hashedPassword
      }
    })

    // 비밀번호 제외하고 반환
    const { password: _, ...userWithoutPassword } = user

    return NextResponse.json({
      success: true,
      user: userWithoutPassword
    }, { status: 201 })

  } catch (error) {
    console.error('회원가입 오류:', error)
    return NextResponse.json(
      { success: false, error: '회원가입 중 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
}
