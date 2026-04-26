# SETUP — 어떤 컴퓨터에서든 시작하기

이 저장소는 **소프트웨어 서버를 띄우지 않습니다.** Claude Desktop으로 로컬 파일을 활용하는 방식이라, 누구나 클론만 하면 즉시 사용할 수 있습니다.

## 0. 누구를 위한 가이드인가

| 사용자 | 필요한 것 |
|---|---|
| YLA 학생 (PPT 생성기만 쓸 때) | Git, Claude Desktop |
| 대학원생 (연구보고서 도우미) | Git, Claude Desktop, Python 3.11+, Jupyter |
| 직장인 (매출/재고 트래커) | Git, Claude Desktop, Python 3.11+, Jupyter |

## 1. 필수 설치 (모든 사용자)

### Git
```bash
# macOS
brew install git
# Windows
winget install -e --id Git.Git
# Linux (Debian/Ubuntu)
sudo apt-get install git
```

### Claude Desktop
- 다운로드: https://claude.ai/download
- 설치 후 로그인.
- (참고) Pro/Team 플랜에서 **Projects** 기능을 사용하면 폴더 단위로 컨텍스트를 등록할 수 있습니다.

## 2. 저장소 클론

```bash
git clone https://github.com/<your-org>/next-seodang.git
cd next-seodang
```

## 3. Claude Desktop에 프로젝트 등록 (가장 누구나 쓸 수 있는 방법)

1. Claude Desktop 실행 → **Projects** → **New Project**.
2. 프로젝트 이름 (예: "YLA Learning Companion", "Research Helper", "Sales Tracker") 지정.
3. **Project knowledge**에 다음 폴더의 모든 `.md` 파일을 드래그 업로드.
   - YLA 학생용: `docs/yla/` + `projects/01_yla_ppt_generator/`
   - 대학원생용: `projects/02_research_report_helper/prompts/`
   - 직장인용: `projects/03_sales_inventory_tracker/prompts/` + `templates/`
4. 채팅에서 스킬·프롬프트를 호출.
   - 예: `explain-classic(yla)로 『논어』 배경 알려줘`
   - 예: `topic_scoping(rr) 프롬프트로 내 연구 주제를 좁혀줘`
   - 예: `data_diagnosis(si)로 내 매출 데이터 진단해줘`

> 회사 데이터처럼 민감한 자료는 Project knowledge에 올리지 마세요. 채팅에 직접 붙여넣고, 대화 종료 시 삭제 정책을 따르세요.

## 4. (선택) 노트북 환경 — 프로젝트 02·03 사용 시

### Python 설치
- macOS: `brew install python@3.11`
- Windows: https://www.python.org/downloads/ (3.11 이상)
- Linux: 배포판 패키지 매니저

### 가상환경 + 의존성
```bash
cd next-seodang
python3 -m venv .venv
source .venv/bin/activate          # Windows: .venv\Scripts\activate
pip install -r requirements.txt
```

### Jupyter 실행
```bash
jupyter lab
```
또는 VS Code의 Jupyter 확장 사용.

### 첫 노트북 실행으로 동작 확인
- 프로젝트 02 — `projects/02_research_report_helper/notebooks/01_search_papers.ipynb`을 열고 `QUERY` 변수 그대로 실행. `data/papers_raw.csv`가 생성되면 OK.
- 프로젝트 03 — `projects/03_sales_inventory_tracker/notebooks/01_load_and_clean.ipynb`을 열고 그대로 실행. 샘플 데이터로 동작 확인.

## 5. 사용 시나리오 3개

### 시나리오 A: YLA 학생이 토요일 발표 준비

1. 평일에 책을 읽고 인용·메모를 `projects/01_yla_ppt_generator/workspace/<책이름>/reading_note_<날짜>.md`에 기록.
2. `outline-essay(yla)`로 에세이 구조 잡기 → 직접 작성 → `feedback-essay(yla)`로 피드백 받고 수정.
3. 토요일 아침 — `create-ppt(yla)` 호출. 사전 체크리스트 통과 후 슬라이드 + 스크립트 생성.
4. 발표 후 — 교수 피드백을 `apply-feedback(yla)`로 항목화 → 직접 수정 → `finalize-portfolio(yla)`로 최종본 점검.

### 시나리오 B: 대학원생이 학기말 보고서 1차 문헌 리뷰

1. `topic_scoping(rr)`로 주제를 검색 가능한 키워드로 좁힘.
2. `01_search_papers.ipynb` 실행 → `02_score_quality.ipynb` → `03_export_to_claude.ipynb`.
3. 결과를 Claude Desktop에 붙여넣고 `reference_quality_check(rr)`.
4. 🟢 분류된 논문 PDF를 직접 읽고 핵심 한 줄씩 정리.
5. `literature_synthesis(rr)`로 합성 → `report_outline(rr)`로 목차 → 본문은 직접 작성.

### 시나리오 C: 직장인이 분기 발주 계획 수립

1. 회사 매출 데이터를 `projects/03_sales_inventory_tracker/data/sales.csv`에 두기 (`templates/sales_schema.md` 참조).
2. `01_load_and_clean.ipynb` → `02_analyze_trends.ipynb` 실행 → 결과를 Claude Desktop에 첨부 + `data_diagnosis(si)`.
3. 진단 ✅이면 `03_forecast.ipynb` → `trend_narrative(si)` → `action_recommendations(si)`.
4. 추천 표를 검토하고 본인이 결정 → 회사 시스템에 반영.

## 6. 개선·확장하는 방법

이 저장소는 **누적**됩니다. 본인이 만든 좋은 프롬프트·예시·노트북은 PR로 공유하세요.

### 새 프롬프트·스킬 추가
- 해당 프로젝트의 `prompts/` 또는 `skills/<stage>/` 아래에 `<verb>-<object>.<scope>.md` 형식으로 저장.
- governance scope: YLA → `(yla)`, Research → `(rr)`, Sales/Inventory → `(si)`. 새 프로젝트면 새 scope 정의.
- 스킬 파일은 [01 프로젝트의 표준 구조](projects/01_yla_ppt_generator/README.md)를 따른다.

### 새 예시 추가
- `examples/`에 입력/출력 한 쌍으로 추가.
- 학생 식별 정보·민감 데이터 포함 금지.

### 새 노트북 추가
- 같은 폴더의 `notebooks/`에 추가, 번호로 흐름 표시 (`04_*.ipynb`).
- 입력·출력 경로는 모두 `../data/` 사용 (gitignore됨).

### 새로운 사용자 군 추가
- `projects/04_<purpose>/` 폴더 생성, 동일한 README/prompts/templates/(notebooks/) 구조.
- governance scope 추가.

### 기여 흐름
```bash
git checkout -b feat/<짧은-설명>
# 파일 수정
git add <변경된 파일들>
git commit -m "feat(scope): 한 줄 설명"
git push -u origin feat/<짧은-설명>
# GitHub에서 PR 생성
```

자세한 내용은 [CONTRIBUTING.md](CONTRIBUTING.md) 참고.

## 7. 자주 묻는 질문

**Q. Claude Desktop이 없으면 사용 못 하나요?**
A. 웹 Claude.ai에서도 Project를 만들어 동일한 파일을 업로드하면 같은 흐름이 가능합니다. 다만 로컬 파일 자동 연동은 Desktop의 강점입니다.

**Q. 노트북을 안 쓰고 Claude만으로 논문 검색이 가능한가요?**
A. Claude는 인터넷 도구가 켜진 환경에서 검색을 도울 수 있지만, 인용수·연도 같은 **정량 신호**는 노트북이 더 정확합니다. 정량 후보 좁히기 → Claude 정성 평가 흐름을 권장합니다.

**Q. 회사 데이터가 외부로 새지 않을까요?**
A. `data/` 폴더는 `.gitignore`로 git 추적이 차단됩니다. 또한 Claude Desktop에서도 채팅에 직접 붙여넣을 때 회사의 AI 사용 정책을 따르세요. 익명화·집계 후 사용 권장.

**Q. 스킬 호출명에 괄호 `(yla)`가 들어가는데 명령어로 동작하나요?**
A. 명령어가 아닙니다. **마커**입니다. Claude Desktop에서 자연어로 `explain-classic(yla)로 ...` 하면 Claude가 Project knowledge에서 해당 `.md` 파일을 찾아 그 흐름대로 응답합니다.
