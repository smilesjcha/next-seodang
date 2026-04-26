# 01 YLA Learning Companion

YLA(Young Leaders Academy) 학생이 **읽기 → 쓰기 → 말하기 → 토론하기 → 수정하기** 5단계 학습 흐름을 Claude Desktop과 함께 진행할 때 사용하는 스킬·템플릿·예시 모음입니다.

이 프로젝트의 모든 스킬은 [docs/yla/06_ai_cautions.md](../../docs/yla/06_ai_cautions.md) 원칙을 자동 적용합니다. **AI는 학생의 사고를 대신하지 않으며**, 읽고 토론한 내용을 발표 가능한 구조로 바꿔주는 학습 보조 도구로만 동작합니다.

## 시작하기 (Claude Desktop Projects)

1. Claude Desktop을 열고 **새 Project**를 만듭니다 (예: "YLA Learning Companion").
2. **Project knowledge**에 다음 두 폴더를 통째로 업로드합니다.
   - `docs/yla/` 안의 모든 `.md`
   - `projects/01_yla_learning_companion/` 안의 모든 `.md` (특히 `skills/`)
3. 채팅에서 `<skill-name>(yla)` 형식으로 스킬을 호출합니다.
   - 예: `explain-classic(yla)로 『논어』 배경 알려줘`
   - 예: `feedback-essay(yla) — 첨부한 초안에 피드백 부탁해`

## 스킬 명명 규약 (Governance)

- 모든 스킬 파일: `skills/<stage>/<verb>-<object>.yla.md`
- 호출명: `<verb>-<object>(yla)`
- `(yla)` 접미사는 "이 스킬은 YLA 학습 컨텍스트 안에서만 의미가 있다"는 governance 표지입니다.
- 단계 공통 스킬은 `skills/_common/`에 두고 동일한 `(yla)` 접미사를 유지합니다.

## 5단계 흐름과 스킬 카탈로그

### 1. 읽기 — 배경지식 이해 + 독서 노트
| 스킬 | 목적 |
|---|---|
| [explain-classic(yla)](skills/read/explain-classic.yla.md) | 고전의 시대 배경·저자·핵심 개념 설명 |
| [record-reading(yla)](skills/read/record-reading.yla.md) | 받은 설명을 학생 본인의 독서 노트로 기록 |

### 2. 쓰기 — 에세이 초안과 피드백
| 스킬 | 목적 |
|---|---|
| [outline-essay(yla)](skills/write/outline-essay.yla.md) | 학생의 메모를 보고 에세이 구조만 제안 (대필 금지) |
| [feedback-essay(yla)](skills/write/feedback-essay.yla.md) | 학생이 쓴 초안에 논리·근거·반례 피드백 |
| [revise-essay(yla)](skills/write/revise-essay.yla.md) | 받은 피드백을 항목별로 분해해 학생이 직접 고치도록 가이드 |

### 3. 말하기 — PPT와 발표
| 스킬 | 목적 |
|---|---|
| [create-ppt(yla)](skills/speak/create-ppt.yla.md) | **사전 체크리스트** 후 PPT 초안 + 발표 스크립트 생성 |
| [update-ppt(yla)](skills/speak/update-ppt.yla.md) | 기존 PPT의 특정 슬라이드를 개선 |
| [rehearse(yla)](skills/speak/rehearse.yla.md) | 발표 시간·강조점·전달력 코칭 |

### 4. 토론하기
| 스킬 | 목적 |
|---|---|
| [prep-debate(yla)](skills/discuss/prep-debate.yla.md) | 학생 주장에 대한 예상 반론·질문·찬반 논점 생성 |
| [summarize-debate(yla)](skills/discuss/summarize-debate.yla.md) | 조별 토론 메모를 쟁점/합의/미해결로 분리 정리 |

### 5. 수정하기 (수업 후)
| 스킬 | 목적 |
|---|---|
| [apply-feedback(yla)](skills/revise/apply-feedback.yla.md) | 교수·동료 피드백을 항목화해 보고서·PPT에 반영 |
| [finalize-portfolio(yla)](skills/revise/finalize-portfolio.yla.md) | 작품집·캠프용 최종본 일관성·인용·표지 점검 |

### 공통
| 스킬 | 목적 |
|---|---|
| [check-ai-cautions(yla)](skills/_common/check-ai-cautions.yla.md) | AI 의존이 과한 부분 자가 점검 |
| [workspace-status(yla)](skills/_common/workspace-status.yla.md) | `workspace/` 안 자료 상태 한눈에 |

## 폴더 안내

- `skills/` — 14개 스킬 `.md` 파일.
- `templates/` — 학생이 채우는 입력 양식, `create-ppt(yla)` 체크리스트, 슬라이드 출력 형식.
- `examples/` — 『국가론』 발표를 예시로 한 입력/출력 한 쌍.
- `workspace_template/` — **주차별/주제별 표준 폴더 구조 템플릿**. 학생이 `cp -r`로 본인 `workspace/`에 복사해 시작. ([상세 가이드](workspace_template/README.md))
- `workspace/` — **학생이 본인의 자료를 두는 작업 공간**. `.gitkeep` 외에는 git에서 무시됩니다(자기 자료는 본인 컴퓨터에만).

## AI 활용 원칙 (요약)

> AI는 학생의 생각을 대신 만드는 도구가 아니라, 학생이 읽고 토론한 내용을 **발표 가능한 구조로 바꿔주는 학습 보조 도구**다.

자세한 내용은 [docs/yla/06_ai_cautions.md](../../docs/yla/06_ai_cautions.md)를 참고하세요.
