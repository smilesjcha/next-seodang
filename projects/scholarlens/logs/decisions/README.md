# Architecture Decision Records (ADR)

프로젝트의 주요 기술적 결정을 기록합니다.

## ADR 형식

```markdown
# ADR-{NNN}: {제목}

## 상태
Proposed / Accepted / Deprecated / Superseded

## 맥락
어떤 상황에서 이 결정이 필요한가?

## 결정
무엇을 결정했는가?

## 근거
왜 이 결정을 했는가? 어떤 대안을 검토했는가?

## 결과
이 결정으로 인해 어떤 영향이 예상되는가?
```

## 예정된 ADR 목록

- [ ] ADR-001: 데이터베이스 선택 (PostgreSQL + pgvector)
- [ ] ADR-002: API 레이어 선택 (tRPC vs Next.js Route Handlers)
- [ ] ADR-003: LLM 제공자 선택 (OpenAI vs Claude vs 로컬 모델)
- [ ] ADR-004: 파일 저장소 전략 (로컬 디스크 vs S3)
- [ ] ADR-005: 근거 추출 단위 (문장 vs 단락)
