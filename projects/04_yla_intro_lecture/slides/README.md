# slides/

이 폴더는 Marp 마크다운으로 작성된 강의 deck입니다.

## 빌드

VS Code: **Marp for VS Code** 확장 설치 → `deck.md` 열고 우상단 \"Open Preview\" 클릭.

CLI:

```bash
# 1회 설치 (Node.js 필요)
npm install -g @marp-team/marp-cli

# PDF
marp deck.md --theme ../design_system/theme.css -o deck.pdf

# PPTX (PowerPoint로 추가 편집할 때)
marp deck.md --theme ../design_system/theme.css --pptx -o deck.pptx

# 실시간 미리보기 (HTML 서버, http://localhost:8080)
marp deck.md --theme ../design_system/theme.css -s
```

## 핵심 원칙

- **인라인 스타일 금지** — 모든 디자인은 `../design_system/theme.css`에서.
- 슬라이드 유형은 `<!-- _class: <type> -->` Marp directive로 지정. 7개 유형은 `../design_system/slide_templates.md` 참조.
- 빌드 산출물(`deck.pdf`, `deck.pptx`)은 git ignore됨 — 슬라이드 본문이 변경되면 다시 빌드.
- 단축 변형(60분)은 `<!-- short -->` HTML 주석이 붙은 슬라이드만 사용.
