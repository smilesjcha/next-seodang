# 강의 전 환경 세팅 (학생용)

이 문서를 강의 1주 전 학생들에게 메일·카페로 보냅니다. **소요 시간 15-30분**.

## 강의 당일 흐름 미리보기

100분 강의는 다음 순서로 진행됩니다.

| 시간 | 내용 |
|---|---|
| 30분 | 강의 (슬라이드) |
| 60분 | 3개 실습 (학생 / 대학원생 / 직장인 구매) |
| 10분 | Q&A |

학생 컴퓨터에서 **함께 따라하는 실습**이 60분이므로, 환경 세팅이 안 되면 60분 동안 멍하게 보게 됩니다. 미리 준비하세요.

---

## 필수 — 모두에게 (10분)

### 1. Claude Desktop 설치

- 다운로드: https://claude.ai/download
- 설치 후 본인 계정으로 로그인.
- 가능하면 **Pro 플랜** 권장 — Project knowledge가 더 큼. Free 플랜이라도 강의는 가능.

### 2. Git 설치

| 운영체제 | 명령 |
|---|---|
| macOS | 터미널에서 `git --version` 입력 → 없으면 자동으로 Xcode CLT 설치 안내 따라가기 |
| Windows | https://git-scm.com/download/win 다운로드 → 기본 옵션으로 설치 |
| Linux | `sudo apt-get install git` 또는 배포판 패키지 매니저 |

### 3. 저장소 클론

터미널(macOS·Linux) 또는 PowerShell(Windows)에서:

```bash
cd ~
git clone https://github.com/smilesjcha/next-seodang.git
cd next-seodang
ls
```

`docs/`, `projects/`, `SETUP.md` 등이 보이면 성공.

### 4. Claude Desktop에 강의용 Project 만들기

강의에서 3가지 페르소나(학생·대학원생·직장인)를 다루지만, 본인이 가장 가까운 1개만 우선 만들어도 됩니다.

1. Claude Desktop 실행 → 좌측 사이드바 **Projects** → **New Project**
2. 이름:
   - YLA 학생 → "YLA Learning Companion"
   - 대학원생 → "Research Report Helper"
   - 직장인 → "Sales / Inventory Tracker"
3. 우측의 **Project knowledge**에 폴더의 모든 `.md` 파일 드래그 업로드:
   - YLA 학생 → `docs/yla/` + `projects/01_yla_learning_companion/`
   - 대학원생 → `projects/02_research_report_helper/prompts/`
   - 직장인 → `projects/03_sales_inventory_tracker/prompts/` + `templates/`

업로드가 끝나면 채팅창에 인사 한 줄 보내보고 답이 오는지 확인.

---

## 선택 — 노트북 실습 (실습 2·3) 참여 시 (10-20분 추가)

본인이 대학원생이거나 직장인 구매 페르소나로 실습할 예정이면 노트북 환경도 준비.

### 5. Python 3.11+ 설치

| OS | 방법 |
|---|---|
| macOS | `brew install python@3.11` (Homebrew 설치되어 있어야 함) |
| Windows | https://www.python.org/downloads/ → 3.11 또는 3.12 설치, "Add Python to PATH" 체크 |
| Linux | 배포판 패키지 매니저 |

확인: `python3 --version` → `Python 3.11.x` 이상

### 6. 가상환경 + 의존성

```bash
cd ~/next-seodang
python3 -m venv .venv
source .venv/bin/activate            # Windows: .venv\Scripts\activate
pip install -r requirements.txt
```

5-10분 걸립니다.

### 7. Jupyter 동작 확인

```bash
jupyter lab
```

브라우저가 열리면 `projects/02_research_report_helper/notebooks/01_search_papers.ipynb`을 열고 첫 셀을 실행해보세요. import 에러가 없으면 성공. 창을 닫고 터미널에서 Ctrl+C로 Jupyter 종료.

VS Code 사용자는 Jupyter 확장(공식)을 설치하고 `.ipynb` 파일을 VS Code에서 직접 열어도 됩니다.

---

## 강의 직전 (5분)

강의 시작 5분 전:

- [ ] 노트북·태블릿이 아닌 **데스크탑 또는 노트북PC** 준비 (모바일은 실습 불가)
- [ ] 인터넷 연결 확인 (Claude Desktop이 응답하는지 채팅 한 줄로 점검)
- [ ] Claude Desktop의 강의용 Project가 사이드바에 보이는지
- [ ] 클론한 `next-seodang` 폴더 위치를 기억 (실습 중 `cd ~/next-seodang` 이동 자주 함)
- [ ] (노트북 실습자) `jupyter lab` 또는 VS Code 즉시 켤 수 있는 상태

---

## 잘 안 되면

| 증상 | 1차 시도 |
|---|---|
| Claude Desktop이 로그인이 안 됨 | 웹 https://claude.ai 에서 먼저 로그인 → Desktop 재시작 |
| `git clone`이 안 됨 (회사 방화벽) | 모바일 핫스팟으로 시도 / GitHub에서 zip 다운로드 |
| `pip install`이 한참 걸림 | 정상 (5-10분). 너무 길면 `pip install --upgrade pip` 후 재시도 |
| Jupyter가 안 켜짐 | `jupyter lab` 대신 VS Code의 Jupyter 확장 사용 |
| 회사 노트북에 Python 설치 권한 없음 | Claude Desktop 실습만 진행 (실습 1) — 강의 70%는 노트북 없이 가능 |

문제가 있으면 강의 1일 전까지 카페·채팅으로 알려주세요. 강의 당일은 트러블슈팅 시간이 부족합니다.

---

## 한 줄 요약

> 강의 1주 전 — Claude Desktop + Git만 깔고 본인 페르소나 Project 1개만 만들어두면 강의 따라가기에 충분. 노트북 실습은 여유 있을 때 추가.
