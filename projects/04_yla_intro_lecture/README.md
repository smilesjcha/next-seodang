# 04 YLA Intro Lecture

아름다운서당 YLA 학생·졸업생을 대상으로, **Claude로 무엇을, 어떻게, 왜** 할 수 있는지 1회 강의로 전달하기 위한 자료 모음입니다.

이 강의는 이 저장소(`next-seodang`)에 들어 있는 세 개의 활용 프로젝트를 그대로 시연하고, 학생들이 자기 컴퓨터에서 따라하도록 설계되었습니다. 별도의 슬라이드용 도구는 만들지 않으며, **마크다운 + Marp CSS**로 발표 자료를 빌드합니다 — 피드백 한 줄에 모든 슬라이드의 톤이 함께 바뀝니다.

## 강의 메타

| 항목 | 값 |
|---|---|
| 대상 | YLA 재학·졸업생 (인문 전공자 다수, 코딩 경험은 다양) |
| 시간 | 약 100분 (30분 강의 + 3×20분 실습 + 10분 Q&A) |
| 사전 준비 | Claude Desktop 설치, GitHub 저장소 클론 |
| 학습 목표 | (1) AI를 학습 코치로 쓰는 원칙, (2) 3개 use case를 본인 컴퓨터에서 실행, (3) 실습 후 본인 자료로 1주 내 1회 적용 |
| 핵심 메시지 | "AI는 사고를 대체하지 않고 사고를 증폭한다" |

## 폴더 구조

```
04_yla_intro_lecture/
├── README.md                       ← 지금 보는 문서
├── lecture_plan.md                 # 분 단위 진행 (30+60+10)
├── lecture_materials_guide.md      # ★ 모든 산출물의 의도·이유·사용법 매핑
├── environment_setup.md            # 강의 전 학생이 준비할 것
├── design_system/
│   ├── README.md                   # PPT 디자인 시스템 명세 (피드백 반복 지점)
│   ├── theme.css                   # Marp CSS — 흰 배경 + 검정 위/아래 보더
│   └── slide_templates.md          # 슬라이드 유형 카탈로그 + 사용 가이드
├── slides/
│   ├── deck.md                     # Marp 마크다운 본 deck
│   └── README.md                   # 빌드 방법
├── hands_on/
│   ├── 01_yla_5stage.md            # 학생 시점 20분 실습 스크립트
│   ├── 02_research_helper.md       # 대학원생 시점 20분 실습
│   └── 03_procurement.md           # 직장인 시점 20분 실습
└── handouts/
    └── one_pager.md                # 학생용 한 장 핸드아웃
```

## 어디서 시작하나

| 상황 | 다음 파일 |
|---|---|
| 강의 흐름을 빠르게 파악 | [lecture_plan.md](lecture_plan.md) |
| **모든 자료의 의도·이유·사용법** | [lecture_materials_guide.md](lecture_materials_guide.md) ← 권장 시작점 |
| 학생 사전 안내 메일에 붙일 내용 | [environment_setup.md](environment_setup.md) |
| 슬라이드 디자인 톤 확인·피드백 | [design_system/README.md](design_system/README.md) |
| 실습 시간 직접 운영 | [hands_on/01_yla_5stage.md](hands_on/01_yla_5stage.md) → 02 → 03 |

## 디자인 시스템 업데이트 흐름

`design_system/theme.css` 한 파일이 모든 슬라이드의 톤을 결정합니다. 사용자가 "보더를 더 두껍게", "본문 폰트 좀 작게" 같은 피드백을 주면 다음 절차로 반영됩니다.

1. CSS 변수 또는 selector 한 줄을 수정
2. `slides/deck.md`을 Marp로 다시 빌드 — 모든 슬라이드 자동 반영
3. design_system/README.md의 변경 이력에 한 줄 기록

자세한 빌드 명령은 [slides/README.md](slides/README.md) 참조.
