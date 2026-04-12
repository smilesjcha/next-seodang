# ScholarLens — Naming Governance

프로젝트 전반에 걸친 파일·폴더 네이밍 규칙을 정의합니다.

---

## 1. 서당 템플릿 레이어 (문서)

| 대상 | 규칙 | 예시 |
|------|------|------|
| 일반 문서 | `snake_case.md` | `competitive_analysis.md` |
| 주간 로그 | `week{NN}_{type}.md` | `week03_discussion.md` |
| AI 피드백 | `week{NN}_ai_feedback.md` | `week02_ai_feedback.md` |
| 아키텍처 결정 | `ADR-{NNN}_{title}.md` | `ADR-001_database_choice.md` |
| 폴더명 | 소문자 영문, 단수형 | `context/`, `logs/`, `materials/` |

---

## 2. Next.js 앱 소스코드

### 2.1 파일 네이밍

| 대상 | 규칙 | 예시 |
|------|------|------|
| React 컴포넌트 | `kebab-case.tsx` | `paper-card.tsx`, `evidence-list.tsx` |
| 일반 모듈 | `kebab-case.ts` | `paper-service.ts`, `pdf-parser.ts` |
| 테스트 파일 | `kebab-case.test.ts` | `evidence-extraction.test.ts` |
| Next.js 라우트 | 프레임워크 규칙 | `page.tsx`, `layout.tsx`, `route.ts` |
| 환경변수 | `SCREAMING_SNAKE_CASE` | `DATABASE_URL`, `OPENAI_API_KEY` |

### 2.2 폴더 네이밍

| 대상 | 규칙 | 예시 |
|------|------|------|
| 소스 폴더 | 소문자, kebab-case | `src/ai/`, `src/server/` |
| 컴포넌트 도메인 | 소문자, 복수형 | `components/papers/`, `components/evidence/` |
| 라우트 폴더 | 소문자, 복수형 | `papers/`, `reports/` |
| 동적 세그먼트 | `[camelCase]` | `[paperId]/`, `[reportId]/` |
| 그룹 라우트 | `(kebab-case)` | `(auth)/` |

### 2.3 코드 내부 네이밍

| 대상 | 규칙 | 예시 |
|------|------|------|
| 컴포넌트 이름 | PascalCase | `PaperCard`, `EvidenceList` |
| 함수 | camelCase | `extractEvidence`, `formatCitation` |
| 상수 | SCREAMING_SNAKE_CASE | `MAX_FILE_SIZE`, `SUPPORTED_FORMATS` |
| 타입/인터페이스 | PascalCase | `Paper`, `Evidence`, `CitationFormat` |
| DB 모델 | PascalCase (단수) | `User`, `Paper`, `Evidence` |
| DB 테이블 | 자동 (Prisma가 복수화) | `users`, `papers`, `evidences` |
| 훅 | `use-kebab-case.ts` (파일), `useCamelCase` (함수) | `use-paper-upload.ts`, `usePaperUpload()` |

---

## 3. 저장소 경로 규칙

| 저장소 | 경로 패턴 | 예시 |
|--------|-----------|------|
| 원본 업로드 | `storage/uploads/{userId}/{paperId}/{filename}` | `storage/uploads/u1/p42/paper.pdf` |
| 파싱 결과 | `storage/processed/{paperId}.txt` | `storage/processed/p42.txt` |
| 내보내기 | `storage/exports/{reportId}.{ext}` | `storage/exports/r7.pdf` |

---

## 4. Git 브랜치 규칙

| 대상 | 규칙 | 예시 |
|------|------|------|
| 기능 개발 | `feat/scholarlens/{feature}` | `feat/scholarlens/evidence-extraction` |
| 버그 수정 | `fix/scholarlens/{description}` | `fix/scholarlens/pdf-parse-error` |
| 문서 작업 | `docs/scholarlens/{topic}` | `docs/scholarlens/api-guide` |
