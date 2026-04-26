# Image Placeholders — 직접 첨부할 이미지 가이드

deck.md의 각 슬라이드에 표시된 `> *(이미지 placeholder: ...)*` 자리에 어떤 이미지를 넣으면 \"비어보이지 않고\" 메시지를 강화할지 정리합니다.

이미지 파일은 `assets/` 폴더에 두고, deck.md에서 `![alt](assets/<filename>.png)`로 참조하세요. 슬라이드별로 \"필수 / 권장 / 선택\" 우선순위 표기.

```
2026_04_26_nextseodang_intro/
├── deck.md
├── speaker_notes.md
├── image_placeholders.md   ← 지금 보는 문서
└── assets/                 ← 직접 만들고 채울 폴더
    ├── chatgpt-vs-claude-code.png
    ├── claude-design-screenshot.png
    └── ...
```

## 슬라이드별 가이드

### S03 — 오늘의 약속  *(선택)*
- **권장**: 발표자 헤드샷 또는 YLA 강의실 전경
- **이유**: 첫 발표 인상 + 강의 분위기 환기
- **출처**: 본인 사진 / 카페 단체 사진 (익명화 후)
- **위치**: 슬라이드 우측 약 35% 폭, 정사각형 또는 4:3
- **대안**: 사진 없으면 그대로 두기 (텍스트만으로도 충분)

### S05 — AI 정의 30초  *(권장)*
- **이미지**: ChatGPT / Gemini / Claude 로고 가로 3개 비교
- **이유**: 학생들이 \"오늘은 이 셋 중 하나를 깊게 본다\"를 시각으로 인식
- **출처**:
  - OpenAI press kit: openai.com/brand
  - Google brand resources: gemini.google.com 페이지 캡처
  - Anthropic logo: anthropic.com 푸터 또는 brand kit
- **권장 형태**: 흰 배경에 3개 로고 같은 높이로 정렬, 사이에 \"·\" 구분자
- **파일명**: `ai-tools-trio.png`

### S07 — Claude의 4가지 진입점  *(권장)*
- **이미지**: 4개 진입점을 표현하는 아이콘 세트
  - 💬 채팅 (Desktop)
  - ⌨️ 터미널 (Code)
  - 👥 팀 (Cowork)
  - 🎨 팔레트 (Design)
- **출처**: Lucide (lucide.dev), Heroicons (heroicons.com), Phosphor (phosphoricons.com) — 모두 무료 SVG
- **권장 형태**: 4개 정사각 카드를 가로로, 각 카드에 아이콘 + 진입점 이름
- **파일명**: `four-entry-points.svg`
- **대안**: 표만으로도 충분 — 시간 없으면 생략

### S08 — Claude Design  *(필수)*
- **이미지**: Claude Design UI 스크린샷
- **이유**: 9일 전 발표된 신제품이라 학생들이 \"실제로 어떻게 생겼나\"를 봐야 신뢰함
- **출처**:
  - https://www.anthropic.com/news/claude-design-anthropic-labs 페이지의 제품 화면
  - 또는 본인이 Claude Pro 계정으로 Design 진입해 1장 캡처 (가장 정직)
- **권장 형태**: 실제 디자인 작업 화면 — 슬라이드 우측 50%
- **파일명**: `claude-design-ui.png`
- **주의**: Anthropic 공식 스크린샷 사용 시 출처 캡션 필수 (\"Source: anthropic.com\")

### S09 — 같은 AI, 다른 화면 경험  *(필수)*
- **이미지**: 좌 ChatGPT 채팅 화면 / 우 Claude Code Plan Mode 또는 Wireframe Preview 캡처
- **이유**: 이 슬라이드의 핵심 메시지가 \"화면 경험의 차이\" — 텍스트로만은 안 와닿음
- **출처**:
  - 좌: ChatGPT 평범한 대화 화면 — 본인 계정에서 캡처
  - 우 (Plan Mode): Claude Code 실행 후 \"Plan first\" 모드 활성화한 화면
  - 우 대안 (Wireframe): Claude Code의 wireframe preview 화면 또는 Anthropic 공식 데모 영상의 한 프레임
- **권장 형태**: 좌우 split, 같은 비율, 캡션으로 \"Chat-only\" / \"Agentic\" 표기
- **파일명**: `chat-vs-agentic.png` (가로 stitched 1장 또는 split 2장)

### S12 — YLA 5단계 학습  *(권장)*
- **이미지**: 흐름도 — 읽기 → 쓰기 → 말하기 → 토론 → 수정 (5단계 화살표)
- **이유**: 표만으로는 \"순환\"의 느낌이 안 남
- **출처**:
  - Excalidraw (excalidraw.com) — 손그림 스타일, 무료
  - Figma — 정돈된 스타일
  - PowerPoint SmartArt도 가능
- **권장 형태**: 가로 5개 노드 + 화살표, 각 노드에 단계명 + 1단어 학생 활동
- **파일명**: `yla-5stage-flow.png`

### S14 — AS-IS / TO-BE — 학생  *(선택)*
- **이미지**: 좌 \"밤샘 PPT 작업\" / 우 \"낮에 여유로운 정리\" 일러스트
- **이유**: 표만으로는 추상적. 일상 감각 추가
- **출처**:
  - unDraw (undraw.co) — 무료 일러스트
  - Storyset (storyset.com) — 무료 일러스트
  - 실제 본인 워크스페이스 폴더 트리 캡처도 효과적 (`workspace/논어/` 등)
- **파일명**: `student-as-is-to-be.png`
- **대안**: 표만 두고 이미지 생략

### S16 — 학생 사고 보호 두 장치  *(필수)*
- **이미지**: `create-ppt(yla)` 호출 시 체크리스트가 출력되는 Claude Desktop 채팅 화면
- **이유**: \"가드레일\"의 핵심 — 학생이 \"진짜 거절되네\"를 봐야 메시지가 박힘
- **출처**: Claude Desktop에서 직접 실행 후 캡처
  - 보고서 첨부 안 한 채 호출 → 거절 메시지 캡처 (가장 강력)
- **권장 형태**: 화면 전체 또는 메시지 영역만, 슬라이드 우측 50%
- **파일명**: `create-ppt-checklist.png`

### S20 — 정량 + 정성 분리  *(권장)*
- **이미지**: 좌 노트북 02 출력 (정량 점수 표) / 우 Claude의 reference_quality_check 결과 (정성 평가) — 가로 stitched
- **이유**: \"두 도구가 협업한다\"의 시각화
- **출처**:
  - 좌: `02_score_quality.ipynb` 실행 후 상위 15건 표 캡처
  - 우: 그 결과로 `reference_quality_check(rr)` 호출한 Claude Desktop 응답 캡처
- **파일명**: `quant-plus-qual.png`

### S24 — 가격 상승의 4가지 원인  *(필수)*
- **이미지**: notebook 04 실행 결과 — STL 4패널 차트
- **이유**: 슬라이드 메시지의 핵심. \"4가지 원인을 4개 패널로\" — 차트 자체가 메시지
- **출처**: `notebook 04_decompose_patterns.ipynb` 실행 후 자동 생성되는 `data/stl_SKU-A001-COTTON.png`
- **권장 형태**: 슬라이드 우측 절반에 차트, 좌측에 4행 표
- **파일명**: `stl-4panels.png` (data/ 에서 복사해 assets/로)
- **빌드 시점**: 강의 직전 노트북 1번 실행해 최신 데이터로

### S25 — 파생상품 payoff  *(필수)*
- **이미지**: notebook 07 실행 결과 — payoff diagram
- **이유**: 인문 학생에게 가장 어려운 슬라이드. 차트 한 장이 100문장보다 강함
- **출처**: `07_derivatives_hedging.ipynb` 실행 후 `data/payoff_SKU-A001-COTTON.png`
- **권장 형태**: 슬라이드 하단 또는 우측 절반
- **파일명**: `payoff-diagram.png`
- **주의**: \"교육 목적\" 라벨이 차트 옆에 함께 표시되도록 슬라이드에서 배치

### S27 — 누구나 5분 안에 시작  *(권장)*
- **이미지**: Claude Desktop \"New Project\" 모달 + 폴더 드래그 캡처
- **이유**: 학생들이 강의 후 본인 컴퓨터에서 따라할 때 \"이 화면\"을 기억해야 함
- **출처**: Claude Desktop에서 직접 캡처 (사용자 본인 정보 마스킹)
- **권장 형태**: 슬라이드 하단 절반
- **파일명**: `claude-desktop-new-project.png`

### S29 — Closing  *(선택)*
- **이미지**: GitHub QR 코드 (https://github.com/smilesjcha/next-seodang)
- **이유**: 학생들이 즉석에서 폰으로 스캔해 저장소 북마크
- **출처**: qr-code-generator.com 또는 macOS의 Shortcuts 앱으로 생성
- **위치**: 슬라이드 우하단 작게
- **파일명**: `github-qr.png`

## 표가 추가로 필요한 슬라이드

대부분 슬라이드는 이미 표가 있지만, 다음은 표 강화 또는 새로 추가하면 좋습니다.

| 슬라이드 | 추가 표 제안 |
|---|---|
| S06 (왜 Claude 3가지 이유) | 좌 ChatGPT/Gemini 약점 vs 우 Claude 강점의 2-column 비교 표 (선택) |
| S15 (Use case 1 요약) | 시간대별 학생 활동 (평일·토요일 오전·오후) 표 (선택) |
| S22 (Use case 3 요약) | 회사 규모별 적용 가능 항목 표 (대기업·중소기업·1인 사업자) (선택) |

## 빌드 시 이미지 자동 포함

deck.md에서 placeholder 줄을 실제 이미지 참조로 바꾸세요:

```markdown
> *(이미지 placeholder: ...)*
```

→

```markdown
![](assets/stl-4panels.png)
```

크기 조정이 필요하면 Marp의 [size syntax](https://marpit.marp.app/image-syntax):

```markdown
![w:480](assets/stl-4panels.png)        # 너비 480px
![h:300 bg right](assets/payoff.png)    # 우측 배경, 높이 300px
```

## 이미지 우선순위 한눈에

**필수 5장** (이거 없으면 슬라이드가 비어 보임)
- S08 Claude Design UI
- S09 ChatGPT vs Claude Code 비교
- S16 create-ppt 체크리스트 캡처
- S24 STL 4패널 차트
- S25 Payoff diagram

**권장 5장** (있으면 강의 톤이 살아남)
- S05 AI 도구 로고 trio
- S07 4 진입점 아이콘
- S12 5단계 흐름도
- S20 정량+정성 stitched
- S27 Claude Desktop New Project 캡처

**선택 4장** (시간 있으면)
- S03 발표자 헤드샷
- S14 AS-IS/TO-BE 일러스트
- S29 GitHub QR

총 **필수 5 + 권장 5 = 10장**을 채우면 deck가 비어보이지 않고 메시지가 뚜렷하게 전달됩니다.
