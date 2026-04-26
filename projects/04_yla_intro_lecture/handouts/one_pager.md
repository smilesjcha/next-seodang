# 학생용 한 장 핸드아웃

> A4 1장. 종이로 출력해 강의 입장 시 배포.

---

## 강의 후 1주 미션 — 본인 자료로 1회 적용

이 강의의 진짜 ROI는 강의 시간이 아니라 **다음 주에 본인 자료로 1회 돌려보는** 것입니다. 페르소나에 맞는 1개를 선택하고 카페에 결과 한 장 공유.

| 페르소나 | 미션 |
|---|---|
| YLA 학생 | 다음 토요일 발표 자료를 `create-ppt(yla)`로 만들고, **자가 수정 회고** 한 단락 |
| 대학원생 | 본인 연구 주제로 **🟢 핵심 인용 5개** 발굴 + `literature_synthesis(rr)` 결과 한 장 |
| 직장인 | 본인 회사 1개 SKU 36개월 매입가로 **STL 분해** + `pattern_insights(si)` 결과 한 장 |

---

## 클론·설치 (한 줄씩)

```bash
git clone https://github.com/smilesjcha/next-seodang.git
cd next-seodang
# Claude Desktop만 쓰면 위 두 줄로 끝.
# 노트북 실습 시:
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
```

Claude Desktop → New Project → 본인 페르소나 폴더의 `.md` 파일 드래그 업로드.

---

## 3개 use case — 입력 한 줄, 받을 결과

### 1. YLA 학생 (`projects/01_yla_learning_companion/`)

- **입력**: 본인 보고서·에세이 1개
- **호출**: `create-ppt(yla) — 다음 보고서로 발표 PPT 만들어줘. 발표 형식: 3분 개인 발표`
- **결과**: 사전 체크리스트 → 슬라이드 markdown + 발표자 스크립트
- **막히면**: `examples/input_example_gukkaron.md` 사용

### 2. 대학원생 (`projects/02_research_report_helper/`)

- **입력**: 본인 연구 키워드 (`topic_scoping(rr)`로 좁히기)
- **노트북**: `01_search_papers.ipynb` → `02_score_quality.ipynb` → `03_export_to_claude.ipynb`
- **호출**: `reference_quality_check(rr) — <export된 markdown>`
- **결과**: 🟢/🟡/🔴 분류 + 빠진 관점 지적

### 3. 직장인 구매 (`projects/03_sales_inventory_tracker/`)

- **입력**: `data/sample_purchases.csv` (또는 본인 회사 데이터, [purchase_schema.md](../templates/purchase_schema.md) 형식)
- **노트북**: `04_decompose_patterns.ipynb` → `06_price_signals.ipynb` → `07_derivatives_hedging.ipynb`
- **호출**: `pattern_insights(si) — <pattern_summary_*.md>` 후 `derivatives_insight(si) — <derivatives_*.md>`
- **결과**: STL 4패널 + 매입 시그널 + payoff diagram + 신호등 판정

---

## 막혔을 때 어디를 보면 되나

| 증상 | 1차 참조 |
|---|---|
| 환경 설치 문제 | `SETUP.md` |
| 페르소나별 흐름 | `projects/0X_*/README.md` |
| 스킬·프롬프트 동작 원리 | 해당 `.md` 파일의 `## 흐름` 섹션 |
| AI 활용 원칙 | `docs/yla/06_ai_cautions.md` |
| 내가 새 스킬 만들고 싶다 | `CONTRIBUTING.md` |

---

## 한 줄 원칙

> AI는 학생의 사고를 대체하지 않는다. **사고를 다음 단계로 넘기는 도구**다.

PPT를 대신 만들기보다, 보고서가 비어 있으면 거절하는 도구를 — 그게 학습 동반자입니다.

---

GitHub: https://github.com/smilesjcha/next-seodang
