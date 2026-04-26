# CONTRIBUTING

이 저장소는 **콘텐츠 누적 저장소**입니다. 한번 만든 프롬프트·스킬·예시·노트북이 다른 사람의 시작점이 되도록 PR을 환영합니다.

## 큰 원칙

1. **AI는 학생의 사고를 대체하지 않는다** — 모든 스킬과 프롬프트는 [docs/yla/06_ai_cautions.md](docs/yla/06_ai_cautions.md) 원칙을 위반하지 않아야 합니다.
2. **누구나 쓸 수 있어야 한다** — 새 의존성·새 외부 키 발급은 가능한 피하고, 꼭 필요하면 README에 발급 절차를 명시합니다.
3. **민감 정보는 절대 커밋하지 않는다** — `data/`·`workspace/`는 git 추적 차단. 회사 매출, 학생 개인 자료, API 키 모두 로컬에만.

## 새 스킬·프롬프트 추가하기

### 명명 규약
- 파일명: `<verb>-<object>.<scope>.md`
- 호출명: `<verb>-<object>(<scope>)`
- scope: YLA → `yla`, Research → `rr`, Sales/Inventory → `si`. 새 프로젝트면 README에서 scope 정의.

### 스킬 표준 구조 (`.yla.md`, `.rr.md`, `.si.md` 공통)

```markdown
# <skill-name>(scope)

## 목적
한 줄로 (무엇을 하고 무엇은 하지 않는지).

## 입력
- 어떤 파일/폴더/텍스트를 받는지

## 흐름
1. 단계별 동작 (사전 체크 → 본 작업 → 출력)

## 출력
- 어떤 결과물을 어떤 형식으로

## 가드레일
- AI 원칙 위반 방지를 위한 거절 조건
- 입력에 없는 사실을 만들지 않는 규칙
- 사용자(학생) 사고를 대신하지 않는 규칙
```

## 새 예시 추가하기

- `projects/<NN>_<name>/examples/` 아래에 입력/출력 한 쌍.
- 학생 이름·회사명·실제 데이터는 익명화. 가상의 인물·SKU·금액으로 바꿔 사용.

## 새 노트북 추가하기

- 입력·출력 경로는 모두 `../data/` (절대 경로 금지).
- 첫 셀에 의도(input/output/다음 노트북)를 markdown으로.
- API 키가 필요한 경우 `os.environ.get('KEY_NAME')`로 읽고 README에 환경 변수 안내.

## 새로운 프로젝트 추가하기

`projects/04_<purpose>/` 형식으로 생성. 다음 구조 권장:

```
04_<purpose>/
├── README.md            # 사용 흐름 + 프롬프트 카탈로그 + 노트북 카탈로그
├── prompts/             # (또는 skills/<stage>/)
├── notebooks/           # (필요 시)
├── templates/
├── examples/
└── data/                # gitignore 권장 (.gitkeep만)
```

PR 설명에:
- 새 사용자 군 / 사용 시나리오
- 새 scope 표기 (예: `(ed)` for education planner)
- `.gitignore`에 추가가 필요한지

## PR 체크리스트

- [ ] [docs/yla/06_ai_cautions.md](docs/yla/06_ai_cautions.md) 원칙 점검
- [ ] 민감 정보 미포함 (`git diff` 한 번 더 확인)
- [ ] 새 의존성이라면 `requirements.txt`와 README 갱신
- [ ] `.gitignore` 확장이 필요하면 함께 PR
- [ ] 스킬·프롬프트는 표준 구조 준수
- [ ] PR 설명에 "왜" (이 추가가 어떤 학생/사용자를 어떻게 돕는지)

## 변경 안 하는 것 (의도적 제외)

- **웹 서버·API 서버 추가** — 이 저장소는 클라이언트 도구(Claude Desktop)만으로 동작하는 것이 핵심 강점.
- **자동화된 사용자 인증** — 본인 데이터는 본인 컴퓨터에만, 공유는 git PR로.
- **메인 브랜치 직접 푸시** — 모든 변경은 PR로.
