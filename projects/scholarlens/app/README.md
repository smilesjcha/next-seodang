# ScholarLens App

AI 기반 논문 근거 탐색 및 연구 효율화 웹 서비스

## 기술 스택

| 영역 | 기술 |
|------|------|
| 프레임워크 | Next.js 14+ (App Router) |
| 언어 | TypeScript |
| 스타일링 | Tailwind CSS + shadcn/ui |
| DB | PostgreSQL + pgvector |
| ORM | Prisma |
| API | tRPC |
| 인증 | NextAuth.js |
| AI | OpenAI API (GPT-4) |
| 상태 관리 | Zustand |
| 문서 파싱 | pdf-parse, mammoth |
| 시각화 | Recharts |
| 테스트 | Vitest + Playwright |

## 시작하기

### 1. 의존성 설치

```bash
cd projects/scholarlens/app
npm install
```

### 2. 환경변수 설정

```bash
cp .env.example .env.local
# .env.local 파일을 편집하여 실제 값을 입력
```

### 3. 데이터베이스 설정

```bash
# PostgreSQL + pgvector 확장이 설치되어 있어야 합니다
npx prisma migrate dev
npx prisma generate
```

### 4. 개발 서버 실행

```bash
npm run dev
```

## 폴더 구조

```
src/
├── app/          # Next.js App Router 페이지
├── components/   # React 컴포넌트
├── lib/          # 유틸리티, DB 클라이언트, 인증
├── server/       # 서버 비즈니스 로직 (API, 서비스)
├── ai/           # AI 파이프라인 (파서, 프롬프트, 체인, 임베딩)
├── hooks/        # 커스텀 React 훅
├── stores/       # 클라이언트 상태 (Zustand)
└── types/        # 공유 TypeScript 타입

storage/
├── uploads/      # 원본 논문 파일 (gitignored)
├── processed/    # 파싱된 텍스트 (gitignored)
└── exports/      # 생성된 보고서 (gitignored)

tests/
├── unit/         # 단위 테스트
├── integration/  # 통합 테스트
└── e2e/          # E2E 테스트
```

## 데이터 흐름

```
논문 업로드 → 텍스트 파싱 → AI 근거 추출 → DB 저장
                                              ↓
사용자 검색/필터 ← 시맨틱 검색 ← 벡터 임베딩
                                              ↓
보고서 생성 → 내보내기 (PDF/DOCX/PPT)
```

## 네이밍 규칙

`context/naming_governance.md` 참조
