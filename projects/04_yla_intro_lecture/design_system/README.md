# PPT Design System

이 디자인 시스템은 **컨설팅 펌 톤**을 따릅니다 — 흰 배경 + 검정 위/아래 보더 + 좌측 정렬 + 단일 강조색.

핵심 단일 출처(single source of truth)는 [`theme.css`](theme.css) 한 파일입니다. 슬라이드 본문([`../slides/deck.md`](../slides/deck.md))은 절대 인라인 스타일을 가지지 않습니다. 디자인 변경은 **항상 CSS 한 곳에서만**.

## 디자인 토큰

CSS 변수로 노출되어 있어, 사용자 피드백에 따라 한 줄 수정으로 전체 톤을 바꿀 수 있습니다.

| 토큰 | 기본값 | 의미 |
|---|---|---|
| `--bg` | `#FFFFFF` | 슬라이드 배경 |
| `--ink` | `#111111` | 본문 텍스트 |
| `--muted` | `#666666` | 보조 텍스트 (페이지 번호, 캡션) |
| `--accent` | `#0A4D68` | 강조색 1개 (제목 underline, 키워드) |
| `--border-top-thickness` | `4px` | 상단 보더 두께 |
| `--border-bottom-thickness` | `1px` | 하단 보더 두께 |
| `--border-color` | `#000000` | 보더 색상 |
| `--gutter` | `48px` | 좌우 여백 |
| `--font-sans` | `Pretendard, system-ui, sans-serif` | 본문 폰트 |
| `--font-display` | `Pretendard, system-ui, sans-serif` | 제목 폰트 |
| `--font-mono` | `'JetBrains Mono', monospace` | 코드 폰트 |
| `--size-h1` | `40pt` | 슬라이드 제목 |
| `--size-h2` | `24pt` | 섹션 제목 |
| `--size-body` | `18pt` | 본문 |
| `--size-caption` | `12pt` | 캡션·페이지 번호 |

## 슬라이드 유형 (Marp `_class` directive)

Marp에서 `<!-- _class: <type> -->`로 지정.

| 유형 | 클래스 | 사용처 |
|---|---|---|
| 표지 | `title` | 강의 첫 장 |
| 섹션 분리 | `section` | 새 use case 시작 전 |
| 본문 단일 | (기본) | 일반 슬라이드 (제목 + bullet) |
| 본문 좌우 | `split` | 좌측 텍스트 + 우측 차트/이미지 |
| 인용 강조 | `quote` | 한 줄 메시지 (Hook 등) |
| 코드 / 출력 | `code` | 노트북 셀 출력, 명령어 |
| 마무리 | `closing` | "감사합니다" / Q&A |

자세한 사용 예시는 [`slide_templates.md`](slide_templates.md).

## 빌드 방법

VS Code 사용자: **Marp for VS Code** 확장 설치 → `deck.md` 열면 미리보기 자동.

CLI 사용자:

```bash
# 1회 설치 (Node.js 필요)
npm install -g @marp-team/marp-cli

# PDF 빌드
marp ../slides/deck.md --theme theme.css -o ../slides/deck.pdf

# PPTX 빌드 (PowerPoint로 추가 편집할 때)
marp ../slides/deck.md --theme theme.css --pptx -o ../slides/deck.pptx

# 실시간 미리보기 (HTML 서버)
marp ../slides/deck.md --theme theme.css -s
```

## 변경 이력 (피드백 반영)

새 피드백을 받을 때마다 다음 형식으로 한 줄 추가.

| 날짜 | 변경 | 토큰/규칙 | 반영 이유 |
|---|---|---|---|
| 2026-04-26 | 초기 시스템 정립 | 모든 토큰 기본값 | 컨설팅 펌 스타일 베이스라인 |
| _(다음)_ | _(예: 보더 두께 증가)_ | _(예: --border-top-thickness 4px → 6px)_ | _(예: \"메시지 강조 효과 부족\")_ |

## 절대 하지 않는 것

- 슬라이드 본문에 직접 `<style>` 또는 인라인 `style=` 속성을 두지 않는다.
- 강조를 위해 색상 토큰을 추가하지 않는다 (현재 `--accent` 단일색만). 다중 강조색은 메시지를 흐린다.
- 이미지·아이콘을 장식 목적으로 넣지 않는다. 차트·스크린샷처럼 정보가 있는 이미지만.
- 폰트 크기를 슬라이드별로 다르게 지정하지 않는다. 토큰을 수정해 일괄 반영.

## 피드백 흐름

1. 발표자가 deck를 빌드해 본다.
2. \"여기 톤이 약하다 / 강하다\"는 피드백을 한 줄로 적는다.
3. Claude(또는 본인)에게 \"`--border-top-thickness`를 6px로 키워줘\" 같이 토큰 단위로 지시.
4. CSS 한 줄 수정 + 변경 이력 추가.
5. 다시 빌드 → 30초 안에 모든 슬라이드에 반영됨.
