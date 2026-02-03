# Claude AI를 이용한 프로젝트 개발

## 프로젝트 개요
불교용품 온라인 쇼핑몰 웹사이트

## 개발 환경
- **프레임워크**: Next.js 16 (App Router)
- **언어**: JavaScript
- **스타일링**: Tailwind CSS
- **패키지 매니저**: npm

## 프로젝트 구조
```
buddhist-shop/
├── app/
│   ├── layout.js          # 루트 레이아웃 (네비게이션, 푸터)
│   ├── page.js            # 메인 페이지
│   ├── globals.css        # 글로벌 스타일
│   ├── products/
│   │   └── page.js        # 상품 목록 페이지
│   ├── board/
│   │   └── page.js        # 게시판 페이지
│   ├── login/
│   │   └── page.js        # 로그인 페이지
│   └── register/
│       └── page.js        # 회원가입 페이지
├── components/            # 재사용 가능한 컴포넌트
├── public/               # 정적 파일 (이미지 등)
└── package.json          # 프로젝트 설정 및 의존성
```

## 주요 기능
1. **메인 페이지**: 쇼핑몰 소개 및 주요 카테고리 표시
2. **상품 페이지**: 불교용품 목록 및 카테고리별 분류
3. **게시판**: 사용자 소통 공간
4. **로그인/회원가입**: 사용자 인증 시스템

## Claude Agent 사용 가이드
이 프로젝트는 효율적인 개발을 위해 특화된 agent를 사용합니다.

### Frontend 작업 시
- **Agent**: `frontend-dev-expert`
- **사용 시점**:
  - React/Next.js 컴포넌트 개발
  - UI/UX 구현 및 디자인
  - Tailwind CSS 스타일링
  - 상태 관리 (useState, useEffect 등)
  - API 연동 및 데이터 fetching
  - 프론트엔드 성능 최적화
- **사용 방법**: 작업 요청 시 "frontend-dev-expert agent를 사용해서..." 라고 명시

### Agent 활용 예시
```
"frontend-dev-expert agent를 사용해서 상품 상세 페이지 컴포넌트를 만들어줘"
"frontend-dev-expert로 장바구니 기능을 구현해줘"
```

## 개발 명령어
```bash
# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start

# 코드 린팅
npm run lint
```

## 다음 단계
- 백엔드 API 연동
- 데이터베이스 설계 및 구현
- 장바구니 기능
- 결제 시스템 통합
- 관리자 페이지
