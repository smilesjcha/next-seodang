# Lecture Materials Guide — 무엇을, 왜, 어떻게

이 강의에서 사용하는 모든 산출물을 다음 4개 카테고리로 묶고, 각각의 **의도(intent) / 이유(reason) / 사용법(how)** 을 명시합니다.

1. **PPT** (강의용 + 실습 안내)
2. **환경 세팅**
3. **데이터**
4. **노트북 (.ipynb)**

각 항목은 동일한 표 형식을 따릅니다. **"왜 이걸 쓰는가"가 항상 먼저 나옵니다** — 도구가 아니라 의도가 강의의 중심이기 때문.

---

## 1. PPT (강의용)

| 무엇 | 의도 | 이유 | 어떻게 |
|---|---|---|---|
| `slides/deck.md` (Marp 마크다운) | 30분 강의 본 슬라이드 16장 | 마크다운 한 파일 = 모든 슬라이드. 디자인 피드백 한 줄에 전체 톤 즉시 반영. PowerPoint·Keynote는 슬라이드별 수동 수정이 필요해 피드백 사이클이 느림. | Marp 설치 후 `marp slides/deck.md -o deck.pdf` 또는 `--pptx`로 빌드. VS Code의 Marp 확장은 실시간 미리보기 제공. |
| `design_system/theme.css` | 컨설팅 펌 스타일 — 흰 배경, 검정 위/아래 보더, 좌측 정렬 | 인문 청중에게 시각 노이즈를 줄이고 메시지에 집중. 강한 색·이미지는 학생들의 \"AI는 도구\"라는 메시지를 흐리게 만든다. | CSS 변수 `--border-top-thickness` 같은 단일 지점만 수정. 슬라이드 본문은 절대 손대지 않는다. 변경 이력은 `design_system/README.md`에 기록. |
| `design_system/slide_templates.md` | 7-8개 슬라이드 유형 카탈로그 (표지, 섹션 분리, 본문 좌, 본문 좌우, 인용, 코드, 이미지, 마무리) | 새 슬라이드를 만들 때마다 디자인을 새로 결정하지 않게 한다. \"이건 본문 좌우 유형\"이라고 한 줄로 결정. | `deck.md`에서 `<!-- _class: split -->` 같은 Marp directive로 유형 지정. |
| `slides/README.md` | Marp 설치·빌드 명령 | 강의 직전 마지막 빌드를 발표자가 5초 안에 끝낼 수 있어야 함. | `npx @marp-team/marp-cli@latest deck.md -o deck.pdf` 한 줄. |

### PPT 안에 들어가는 실습 관련 정보

실습 슬라이드는 **3가지** 만 보여줍니다 (각 use case당 1장):

1. **이 실습으로 무엇을 할 건가** (한 줄)
2. **20분 안에 도달할 결과** (스크린샷 또는 한 줄 outcome)
3. **실패 시 fallback** ("notebook이 안 켜지면 미리 준비된 markdown 표 사용")

자세한 단계별 진행 안내는 슬라이드에 넣지 않고 별도 핸드아웃([handouts/one_pager.md](handouts/one_pager.md))으로 빼냅니다. 이유: 슬라이드는 "메시지"용, 핸드아웃은 "참조"용으로 분리해야 학생이 손에 종이를 두고 화면에서 멀어져도 흐름을 따라갈 수 있다.

---

## 2. 환경 세팅

| 무엇 | 의도 | 이유 | 어떻게 |
|---|---|---|---|
| Claude Desktop 설치 | 모든 use case의 공통 진입점 | 웹 Claude.ai와 달리 Project knowledge가 폴더 단위 컨텍스트를 잡아준다. 학생이 매번 같은 docs를 업로드할 필요 없음. | https://claude.ai/download → 로그인 → 새 Project 생성. Pro 플랜 권장 (Project knowledge가 더 큼). |
| Git + 저장소 클론 | 강의에서 다루는 모든 자료의 소스 | "강사가 보여주는 화면"을 학생이 자기 컴퓨터에서 그대로 재현 가능해야 한다. | `git clone https://github.com/smilesjcha/next-seodang.git` |
| Python 3.11+ + Jupyter (선택) | 실습 2·3에서 노트북 실행 | 인용수·시계열 분해·시계열 예측은 Claude로 못 함 (정량 신호는 코드가 정확함). 단, 노트북을 못 켜는 학생을 위한 fallback도 항상 준비. | `pip install -r requirements.txt` 후 `jupyter lab` 또는 VS Code Jupyter 확장. 강의 전 학생이 1회 동작 확인 권장. |
| Claude Desktop의 새 Project 3개 | 3개 use case별 격리된 컨텍스트 | 한 Project에 모든 docs를 넣으면 컨텍스트가 흐려진다. YLA용·연구용·매출재고용을 각각 분리. | `SETUP.md`의 3.번 단계대로 폴더만 다르게 등록. |
| `.env` 또는 API 키 | **불필요** | 이 강의는 Claude Desktop만 사용 — API 호출 X. OpenAlex도 무인증으로 시작 가능. | 키 발급·관리 부담 없음. |

### 강의 직전 체크리스트 (10분)

| 체크 | 액션 |
|---|---|
| 인터넷 연결 | 강의실 Wi-Fi 또는 핫스팟 백업 |
| Claude Desktop 로그인 | 로그아웃되어 있으면 즉시 재로그인 |
| 화면 공유 해상도 | 1920x1080, 폰트 크기 확대 (CMD/CTRL +) |
| 백업 영상 | 라이브 데모 실패 시 30초 영상 즉시 재생 가능하도록 |
| 사전 클론 | 학생 다수가 클론 못 하면 USB로 zip 배포 백업 |

학생용 사전 안내는 [`environment_setup.md`](environment_setup.md) — 강의 1주 전 메일/카페에 전달.

---

## 3. 데이터

| 파일 | 의도 | 이유 | 어떻게 |
|---|---|---|---|
| `projects/01_yla_learning_companion/examples/input_example_gukkaron.md` | 보고서 없는 학생용 데모 입력 | YLA 학생이 보고서를 안 가져오면 `create-ppt(yla)`이 거절 → 실습이 멈춘다. 가상의 학생 보고서를 백업으로 둔다. | 학생이 자기 보고서가 없으면 이 파일을 `workspace/<책>/essay_v1.md`로 복사 후 진행. |
| `projects/02_research_report_helper/notebooks/.../papers_*.csv` | 노트북 출력의 캐시 | 실습 중 OpenAlex API가 일시적으로 느리면 강의 흐름이 끊긴다. 강의 전 미리 한번 돌려둔 결과를 백업으로. | 강의 직전 강사가 노트북 1·2를 한번 실행해 두고, 학생들에게 \"느리면 캐시 결과를 복사해서 시작\"이라고 안내. |
| `projects/03_sales_inventory_tracker/data/sample_purchases.csv` (36개월 × 3 SKU) | 매입 단가 시계열 — STL/매크로/시그널/헷지 4개 노트북의 공통 입력 | 회사 데이터를 가져올 수 없는 학생도 동일한 흐름을 100% 체험할 수 있어야 한다. 36개월·계절성·매크로 영향이 의도적으로 들어가 있어 노트북이 \"의미 있는 결과\"를 낸다. | 노트북 안 `INPUT_PATH = '../data/sample_purchases.csv'` 그대로 실행. 본인 회사 데이터로 바꿀 때 이 한 줄만 변경. |
| `projects/03_sales_inventory_tracker/data/sample_macro.csv` (36개월) | 매크로 컨텍스트 (FX/유가/원가) | "매입가가 오른 게 우리 협상력 부족이냐, 세계 어디든 같은 흐름이냐" 구분 능력을 보여주기 위함. 무료 매크로 데이터를 직접 받아오는 코드는 강의 시간에 안 어울림. | `notebook 05`가 자동으로 결합 사용. |
| `projects/03_sales_inventory_tracker/data/sample_sales.csv` + `sample_inventory.csv` (24개월 × 3 SKU) | 갈래 A 매출/재고 흐름 | 갈래 B(매입)와 다른 데이터로 분리해 갈래의 차이를 명확히. | 노트북 01~03이 공통 사용. |

### 데이터 보호 원칙

- 모든 회사·개인 자료는 학생 본인 컴퓨터에만. `data/`·`workspace/`는 git 추적 차단됨.
- 강의 중 학생이 본인 데이터를 화면 공유하지 않도록 안내.
- Claude Desktop 채팅에 회사 자료를 붙여넣을 때 회사 AI 사용 정책 준수 안내.

---

## 4. 노트북 (.ipynb) — 7개

각 노트북의 \"의도/이유/사용법\"을 use case별로 정리.

### 갈래 A — 매출/재고 (실습 3에서 사용 안 함, 부록)

| 노트북 | 의도 | 이유 | 사용법 (강의 맥락) |
|---|---|---|---|
| `01_load_and_clean.ipynb` | 매출 CSV 로드·결측·이상치 점검 | 시계열 분석 전 데이터 품질 점검을 학생이 직접 보게 하기 위함. 빠진 일자, 0과 NaN의 차이를 시각적으로. | 실습 3 쌍둥이 흐름이지만 시간상 갈래 B를 우선. 관심 학생만 사후 보기. |
| `02_analyze_trends.ipynb` | 월별 추이·이동평균·계절성 시각화 | 예측 전에 \"이 데이터에 계절성이 있는가\"를 학생이 본인 눈으로 확인. | 사후 학습용. |
| `03_forecast.ipynb` | ARIMA로 향후 6개월 예측 | 단일 모델로 가벼움. Prophet은 빌드가 까다로워 강의용 부적합. | 사후 학습용. |

### 갈래 B — 구매 담당 심화 (실습 3 메인)

| 노트북 | 의도 | 이유 | 사용법 (강의 맥락) |
|---|---|---|---|
| `04_decompose_patterns.ipynb` | 추세·계절성·잔차·이상치 4개 패널로 분해 (STL) | "가격이 올랐다"의 모호함을 4개 원인으로 쪼개 매입 결정의 차이를 보여줌. STL은 ARIMA 잔차 분석보다 직관적이고 시각화가 강해 강의에 적합. | **실습 3의 1단계** — `TARGET = 'SKU-A001-COTTON'` 변경 가능. 셀 하나씩 Run All. |
| `05_macro_context.ipynb` | 환율·유가·원가가 매입가를 얼마나 설명하는지 OLS 회귀 | "내부 협상 vs 매크로 흐름" 분리 능력. R²·계수의 비즈니스 함의를 학생이 직접 본다. 패션 산업 학생에게 매크로가 의외로 큰 영향임을 보여주는 \"아하\" 모먼트. | 실습 3의 후속 — 시간 남으면 진행, 아니면 `pattern_insights(si)` 호출에 결과만 사용. |
| `06_price_signals.ipynb` | z-score·Bollinger·모멘텀으로 매입 시그널 분류 | "지금 살까 더 기다릴까"의 정량 답을 만들어보는 실습. 단순 룰을 직접 보여줘서 학생이 본인 회사 임계값을 튜닝할 수 있게. | **실습 3의 2단계** — 임계값을 학생이 한번씩 수정해보고 결과 변화 관찰. |
| `07_derivatives_hedging.ipynb` | Forward·옵션 가격, payoff diagram, 변동성 민감도 | 인문 학생이 가장 어려워하는 파생상품 수학을 \"가로축 가격, 세로축 비용\"의 한 그림으로 직관화. 패션 산업의 OTC forward·FX 옵션 매핑까지. | **실습 3의 3단계** — 프리미엄·만기를 학생이 바꿔보고 그래프 변화 관찰. **교육 목적임을 강조**. |

### 갈래 C — 연구보고서 도우미

| 노트북 | 의도 | 이유 | 사용법 (강의 맥락) |
|---|---|---|---|
| `01_search_papers.ipynb` (project 02) | OpenAlex 무인증 키워드 검색 | API 키 발급 부담 0, 일일 100k 요청 무료. 대학원생이 강의 후 자기 주제로 즉시 적용 가능. | **실습 2의 1단계**. `QUERY` 변수 한 줄만 수정. |
| `02_score_quality.ipynb` (project 02) | 인용수 백분위·연도·저널 보유 기반 정량 점수 | 후보 50건을 손으로 읽기 전, 상위 15건을 좁히는 1차 필터. \"점수가 정성 평가를 대체하지 않는다\"는 점을 강조. | **실습 2의 2단계**. |
| `03_export_to_claude.ipynb` (project 02) | 상위 N개를 markdown 표로 export | 노트북에서 Claude Desktop으로 옮기는 다리. 학생이 csv를 그대로 복사하면 채팅에서 안 읽히는 문제 해결. | **실습 2의 3단계**. 결과 파일을 채팅창에 그대로 드래그. |

---

## 5. 자료 간 의존 관계 한눈에

```
강의 흐름 (PPT)
   │
   ├─ S02~05  YLA 학습 철학  ←─  docs/yla/06_ai_cautions.md, docs/yla/02_learning_process.md
   │
   ├─ S06~08  use case 1 (학생)
   │           │
   │           실습 1 ─────────  projects/01_yla_learning_companion/skills/{read,write,speak}/*.yla.md
   │                              + examples/input_example_gukkaron.md (보고서 없는 학생용)
   │
   ├─ S09~11  use case 2 (대학원생)
   │           │
   │           실습 2 ─────────  projects/02_research_report_helper/notebooks/01,02,03.ipynb
   │                              + prompts/topic_scoping.md, reference_quality_check.md
   │
   ├─ S12~14  use case 3 (직장인 구매)
   │           │
   │           실습 3 ─────────  projects/03_sales_inventory_tracker/notebooks/04,06,07.ipynb
   │                              + data/sample_purchases.csv, sample_macro.csv
   │                              + prompts/pattern_insights.md, derivatives_insight.md
   │
   └─ S15~16  GitHub 투어 + 환경 셋업
              │
              ├─  SETUP.md
              ├─  CONTRIBUTING.md
              └─  requirements.txt
```

---

## 6. 강의 후 학생이 가져갈 것 — 한 페이지 정리

학생 손에 남는 산출물(=핸드아웃)은 [handouts/one_pager.md](handouts/one_pager.md)에 한 장으로 정리되어 있어야 합니다. 강의 슬라이드는 강의 시간에만 의미가 있지만, 핸드아웃은 1주일 뒤 학생이 본인 자료로 적용할 때 다시 보는 자료입니다.

핸드아웃에 반드시 들어가는 것:
1. 클론·설치 한 줄 명령어
2. 3개 use case별로 \"내 입력 → Claude 호출 한 줄 → 받을 결과\"
3. 막혔을 때 어디를 보면 되는지 (`SETUP.md`, 각 프로젝트의 `README.md`)
4. 본 저장소 GitHub URL

핸드아웃 1장은 **종이로** 출력해 강의 입장 시 배포 권장. 노트북 화면에 너무 많은 탭이 떠 있으면 학생이 길을 잃습니다.

---

## 7. 자료 갱신 흐름 — 사용자(=발표자) 피드백 반영 방식

| 피드백 종류 | 어디를 수정 | 영향 |
|---|---|---|
| "보더 두께 더 두껍게" | `design_system/theme.css` 변수 1줄 | 모든 슬라이드 즉시 반영 |
| "use case 2의 메시지가 약함" | `slides/deck.md`의 S09~11 본문 + `lecture_plan.md`의 시간 분배 | 강의 본문만 영향 |
| "실습 3에서 노트북 7이 너무 어려움" | `hands_on/03_procurement.md`에서 노트북 7을 옵션화 + `slides/deck.md`의 S14에 \"교육 목적\" 한 줄 강조 | 실습 흐름 영향 |
| "데이터 너무 짧음" | `projects/03_sales_inventory_tracker/data/` 샘플 CSV 재생성 (60개월) | 노트북 4·5·6·7 모두 자동 반영 |
| "Claude Desktop 외 옵션도 안내" | `environment_setup.md`에 Claude.ai 웹 fallback 단락 추가 | 사전 안내만 영향 |

피드백은 가능하면 **한 곳만 고치면 모든 자료에 반영되도록** 설계되어 있습니다. CSS·CSV·프롬프트 표준 구조 — 이 세 가지가 단일 출처(single source of truth) 역할을 합니다.
