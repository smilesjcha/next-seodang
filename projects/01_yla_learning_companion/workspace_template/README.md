# YLA 학생 작업 템플릿 (workspace_template)

이 폴더는 **학생이 본인 `workspace/`에 복사해서 시작**하는 템플릿입니다. 매주 토요일 발표·세미나 흐름을 자료로 누적할 수 있도록 두 가지 정리 방식을 제공합니다.

## 두 가지 정리 방식 — 어느 것을 쓸지

| 방식 | 언제 쓰나 | 장점 | 단점 |
|---|---|---|---|
| **by_week/** | 주차별 학습이 정해져 있는 YLA 1·2학기 흐름 (책 1권 / 1주) | 토요일 회차별로 깔끔, 발표 일정과 1:1 매칭 | 같은 주제를 여러 주차에서 다루면 분산됨 |
| **by_topic/** | 한 주제(예: \"정의\", \"리더십\")를 여러 주차·여러 책에서 깊게 파는 경우 | 누적된 사고 흔적이 한곳에 모임 | 주차 일정과의 매칭이 약함 |

**기본 권장**: YLA 정규 과정(25주)은 `by_week/`로, 졸업 후 본인 관심사를 깊게 파는 단계는 `by_topic/`으로.

## 사용 흐름

```bash
cd projects/01_yla_learning_companion

# 1. 새 주차 시작 시 — 템플릿을 workspace/로 복사
cp -r workspace_template/by_week/week-NN_<책-또는-주제> \
      workspace/by_week/week-01_논어

# 2. 또는 새 주제 시작 시
cp -r workspace_template/by_topic/<주제-슬러그> \
      workspace/by_topic/justice
```

`workspace/` 안의 모든 파일은 `.gitignore`로 차단되어 본인 컴퓨터에만 남습니다 — 인용 메모·에세이 초안·발표 자료 모두 보호.

## by_week/week-NN_<책-또는-주제>/ 구조

YLA 5단계 학습 흐름이 7개 파일로 매핑됩니다.

| 파일 | 단계 | 내용 |
|---|---|---|
| `00_overview.md` | — | 이 주차 책·주제·핵심 질문·발표 일자 |
| `01_reading_notes.md` | 읽기 | 인용 3개 + 본인 한 줄 반응 + 새 질문 |
| `02_essay_draft.md` | 쓰기 | 본인이 직접 쓴 첫 초안 (AI 대필 금지) |
| `03_feedback_received.md` | 쓰기·수정 | `feedback-essay(yla)` 또는 동료·교수 피드백 모음 |
| `04_essay_final.md` | 쓰기·수정 | 피드백 반영해 본인이 직접 수정한 최종본 |
| `05_slides.md` | 말하기 | `create-ppt(yla)` 출력 + 본인 말투로 다듬은 최종 |
| `06_debate_notes.md` | 토론 | 조별 토론 메모, 합의·쟁점·미해결 |
| `07_post_revision.md` | 수정 | 수업 후 교수 피드백 반영, 작품집용 최종 |

각 파일은 비어있는 채로 시작하고, 학생이 단계별로 채웁니다. AI가 대신 채우지 않는 게 핵심.

## by_topic/<주제-슬러그>/ 구조

| 폴더·파일 | 내용 |
|---|---|
| `00_overview.md` | 이 주제의 한 줄 정의 + 다루는 기간 + 관련 책·인물 |
| `sources/` | 출처별 자료 (책 1권당 1파일, 논문·기사도 가능) |
| `notes/` | 시간순 사고 흔적 (`YYYY-MM-DD_*.md`) |
| `essays/` | 에세이 버전 누적 (`v1.md`, `v2_after_feedback.md`, ...) |
| `slides/` | 발표 자료 누적 (서로 다른 자리에서 같은 주제 발표 시) |
| `archive/` | 옛 버전·폐기된 흐름 보관 |

## 학생 워크플로 예시 (1주)

| 시점 | 액션 |
|---|---|
| 일요일 | 다음 주 책 받음 → `cp -r ... week-NN_<책>/` 생성 → `00_overview.md` 작성 |
| 월~목 | 읽기 + `01_reading_notes.md` 누적 + `02_essay_draft.md` 첫 초안 |
| 금 | `feedback-essay(yla)` 호출 → `03_feedback_received.md` 정리 → `04_essay_final.md` 수정 |
| 토 오전 | `create-ppt(yla)` 호출 → `05_slides.md` |
| 토 오후 | 발표 + 토론 → `06_debate_notes.md` |
| 토 저녁~일 | 교수 피드백 → `apply-feedback(yla)` → `07_post_revision.md` |

> 이 템플릿이 강제는 아닙니다. **본인 학습 리듬에 맞게 파일 추가·삭제** 자유.

## 폴더 보기

```
projects/01_yla_learning_companion/
├── workspace_template/         ← 지금 보는 폴더 (git 추적)
│   ├── README.md
│   ├── by_week/
│   │   └── week-NN_<책-또는-주제>/
│   └── by_topic/
│       └── <주제-슬러그>/
└── workspace/                  ← 학생 본인 자료 (gitignore)
    ├── .gitkeep
    ├── by_week/                ← 학생이 cp -r로 복사해 채움
    └── by_topic/
```
