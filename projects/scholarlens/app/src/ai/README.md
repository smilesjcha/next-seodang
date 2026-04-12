# AI Pipeline

ScholarLens의 핵심 AI 처리 파이프라인 아키텍처입니다.

## 파이프라인 흐름

```
논문 업로드
    │
    ▼
parsers/               ← 1단계: 문서 파싱
├── pdf-parser.ts         PDF → 텍스트 (pdf-parse)
├── docx-parser.ts        DOCX → 텍스트 (mammoth)
├── txt-parser.ts         TXT → 텍스트 (직접 읽기)
└── parser-factory.ts     MIME 타입으로 파서 자동 선택
    │
    ▼
chains/                ← 2단계: AI 처리 체인
├── paper-processing-chain.ts    전체 파이프라인 오케스트레이션
│   ├── 근거 추출
│   ├── 인용 생성
│   ├── 신뢰성 평가
│   └── 벡터 임베딩
├── evidence-chain.ts            원문 텍스트 → 근거 문장
└── report-chain.ts              근거 세트 → 구조화된 보고서
    │
    ▼
prompts/               ← LLM 프롬프트 템플릿
├── evidence-extraction.ts       근거 문장 추출
├── summarization.ts             요약 생성
├── citation-generation.ts       인용 형식 생성
├── reliability-scoring.ts       신뢰성 평가
└── report-generation.ts         보고서 생성
    │
    ▼
embeddings/            ← 벡터 검색
├── embed.ts                     텍스트 → 벡터 변환 (OpenAI Embeddings)
├── search.ts                    시맨틱 유사도 검색 (pgvector)
└── index.ts                     벡터 스토어 통합
```

## 주요 설계 결정

### 파서 선택 전략
`parser-factory.ts`가 파일의 MIME 타입을 확인하고 적절한 파서를 자동으로 선택합니다.

### 근거 추출 단위
문장(sentence) 단위로 추출합니다. 단락 단위보다 정밀하고, 사용자가 필요한 부분만 선택적으로 인용할 수 있습니다.

### 벡터 저장소
별도 벡터 DB 없이 PostgreSQL의 pgvector 확장을 사용합니다. 인프라를 단순하게 유지하면서도 시맨틱 검색이 가능합니다.

### 프롬프트 관리
각 프롬프트는 TypeScript 파일로 관리하여 타입 안전성을 확보하고, 변수 치환이 가능합니다.

## 파일 네이밍

- 모든 파일: `kebab-case.ts`
- 체인 파일: `{도메인}-chain.ts`
- 프롬프트 파일: `{용도}.ts`
- 파서 파일: `{형식}-parser.ts`
