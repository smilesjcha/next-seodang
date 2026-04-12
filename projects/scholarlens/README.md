# ScholarLens

> AI 기반 논문 근거 탐색 및 연구 효율화 솔루션

아서당 18기 철수의 프로젝트입니다.

---

## 한 줄 정의

논문에서 핵심 근거 문장을 AI로 추출하고, 인용·검증·보고서 생성까지 하나의 워크플로우로 연결하는 연구 생산성 도구.

## 핵심 기능

| # | 기능 | 중요도 |
|---|------|--------|
| 1 | AI 근거 문장 추출 (PDF/DOCX/TXT) | 🔴 높음 |
| 2 | 자동 인용 생성 + 신뢰성 검증 | 🔴 높음 |
| 3 | 연구 데이터 시각화 및 라이브러리 관리 | 🟡 중간 |
| 4 | 자동 연구 보고서 생성 및 내보내기 | 🟡 중간 |
| 5 | 팀 협업 및 공유 | 🟢 낮음 |

---

## 폴더 구조

```
scholarlens/
│
├── context/                    # 프로젝트 정의 문서
│   ├── project_brief.md           프로젝트 브리프
│   ├── PRD.md                     제품 요구사항 문서
│   ├── functional_spec.md         기능명세서
│   └── naming_governance.md       네이밍 규칙
│
├── materials/                  # 참고 자료
│   ├── research/                  경쟁 서비스 분석
│   ├── references/                API/라이브러리 문서 링크
│   └── wireframes/                UI 와이어프레임
│
├── logs/                       # 진행 기록
│   ├── week{NN}_*.md              주간 토론/피드백 로그
│   └── decisions/                 아키텍처 결정 기록 (ADR)
│
├── prompts/                    # AI 프롬프트 자산
│   ├── evidence_extraction_prompt.md
│   ├── code_review_prompt.md
│   └── ux_review_prompt.md
│
├── outputs/                    # AI 생성 결과물
│   ├── reports/                   프로젝트 보고서
│   └── reviews/                   코드/UX 리뷰 결과
│
└── app/                        # Next.js 웹 서비스 (실제 코드)
    ├── prisma/                    DB 스키마
    ├── src/
    │   ├── app/                   페이지 (App Router)
    │   ├── components/            React 컴포넌트
    │   ├── ai/                    AI 파이프라인 (핵심)
    │   ├── server/                서버 로직 (API, 서비스)
    │   ├── lib/                   유틸리티
    │   ├── hooks/                 커스텀 훅
    │   ├── stores/                클라이언트 상태
    │   └── types/                 TypeScript 타입
    ├── storage/                   파일 저장소 (gitignored)
    │   ├── uploads/               원본 논문
    │   ├── processed/             파싱된 텍스트
    │   └── exports/               생성된 보고서
    └── tests/                     테스트
```

---

## 데이터 흐름

```
[준비물]                        [가공]                          [산출물]
논문 PDF/DOCX/TXT         AI 파이프라인                    사용자에게 제공
        │                       │                               │
        ▼                       ▼                               ▼
  storage/uploads/      ai/parsers/ → 텍스트 추출       근거 문장 컬렉션
        │               ai/chains/ → 근거 추출          인용 정보 (APA/MLA)
        │               ai/prompts/ → LLM 프롬프트      신뢰성 지표
        │               ai/embeddings/ → 벡터화         시각화 대시보드
        ▼                       ▼                       연구 보고서
  storage/processed/    PostgreSQL + pgvector            (PDF/DOCX/PPT)
                                                              │
                                                              ▼
                                                        storage/exports/
```

---

## 페이지 구조 (라우팅)

| 경로 | 설명 |
|------|------|
| `/` | 랜딩 페이지 |
| `/login`, `/register` | 인증 |
| `/dashboard` | 대시보드 (최근 논문, 통계) |
| `/papers` | 논문 라이브러리 |
| `/papers/upload` | 논문 업로드 |
| `/papers/[paperId]` | 논문 상세 + 근거 리스트 |
| `/papers/[paperId]/evidence` | 근거 문장 필터/검색 |
| `/papers/[paperId]/citations` | 인용 관리 |
| `/library` | 연구 라이브러리 (태그, 검색) |
| `/library/collections` | 근거 컬렉션 관리 |
| `/reports` | 보고서 목록 |
| `/reports/new` | 새 보고서 생성 |
| `/reports/[reportId]` | 보고서 에디터/내보내기 |
| `/visualize` | 연구 동향 시각화 |

---

## AI 활용 가이드

### Codex / Claude에서 이 프로젝트를 여는 방법

1. 이 폴더 전체를 프로젝트로 엽니다.
2. 먼저 `context/project_brief.md`를 읽게 합니다.
3. 그 다음 `context/PRD.md`, `context/functional_spec.md`를 읽게 합니다.
4. AI에게 역할을 명확히 줍니다:
   - 코드 리뷰어
   - 아키텍처 조언자
   - UX 리뷰어
   - 테스트 설계자

### 추천 요청 방식

```text
이 프로젝트의 context/PRD.md와 functional_spec.md를 읽고,
너는 시니어 풀스택 개발자 역할을 맡아라.

다음 기능을 구현하기 위한 구체적인 코드를 작성해라:
1. [구현할 기능]
2. [고려할 제약조건]
3. [참고할 기존 코드 경로]
```

---

## 운영 원칙

1. AI는 초안을 만든다.
2. 사람은 판단하고 선택한다.
3. 학술 근거와 인용은 원문으로 반드시 확인한다.
4. 좋은 프롬프트와 결과물은 `prompts/`, `outputs/`에 남겨 자산으로 축적한다.
5. 네이밍 규칙은 `context/naming_governance.md`를 따른다.
