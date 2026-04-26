# 05 sungjae-cha's Lectures

차성재(sungjae-cha)가 진행한 / 진행할 강의의 누적 포트폴리오입니다.

각 강의는 `YYYY_MM_DD_<주제>/` 형식의 하위 폴더로 분리되어, 발표 deck·발표자 노트·강의별 메모를 함께 담습니다. 디자인 시스템·실습 스크립트·핸드아웃 등의 **공용 자산**은 [`projects/04_yla_intro_lecture/`](../04_yla_intro_lecture/)에 있고, 이 폴더는 \"이 날의 그 강의\"를 위한 구체적 산출물만 둡니다.

## 강의 인덱스

| 일자 | 폴더 | 주제 | 대상 | 길이 | 상태 |
|---|---|---|---|---|---|
| 2026-04-26 | [2026_04_26_yla_intro/](2026_04_26_yla_intro/) | Claude로 사고를 증폭하다 — 3가지 use case | YLA 재학·졸업생 | ~100분 | 진행 예정 |

## 폴더 표준

새 강의를 추가할 때 다음 구조를 따르세요.

```
YYYY_MM_DD_<주제>/
├── README.md              # 이 강의의 메타: 대상, 길이, 핵심 메시지, 변경점
├── deck.md                # Marp 본 슬라이드 (../../04_yla_intro_lecture/design_system/theme.css 참조)
├── speaker_notes.md       # 발표자 노트: 시간 분배, 강조 멘트, 트러블슈팅
└── (선택)
    ├── handout.md         # 학생용 한 장 (해당 강의에 맞춰 04의 one_pager 수정)
    └── feedback.md        # 강의 후 받은 피드백 + 다음 강의에 반영할 것
```

## 빌드 (오늘 강의용)

```bash
cd projects/05_sungjae_cha_lectures/2026_04_26_yla_intro

# PDF
npx @marp-team/marp-cli@latest deck.md \
  --theme ../../04_yla_intro_lecture/design_system/theme.css \
  -o deck.pdf

# PPTX (PowerPoint로 추가 편집)
npx @marp-team/marp-cli@latest deck.md \
  --theme ../../04_yla_intro_lecture/design_system/theme.css \
  --pptx -o deck.pptx

# 실시간 미리보기 (http://localhost:8080)
npx @marp-team/marp-cli@latest deck.md \
  --theme ../../04_yla_intro_lecture/design_system/theme.css -s
```

VS Code의 **Marp for VS Code** 확장 사용 시 `deck.md` 열고 우상단 \"Open Preview\"만 눌러도 됨.

## 디자인 톤 변경

이 폴더의 deck은 톤·여백·폰트를 직접 바꾸지 않습니다. 항상 [`../04_yla_intro_lecture/design_system/theme.css`](../04_yla_intro_lecture/design_system/theme.css)의 CSS 토큰을 수정합니다 — 한 곳에서 모든 강의 deck에 즉시 반영.
