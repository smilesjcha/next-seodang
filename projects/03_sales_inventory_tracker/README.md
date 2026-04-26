# 03 Sales / Inventory Tracker

직장인(아름다운서당 동시 수강자 포함)이 본인 회사의 **매출·재고 데이터**로 추세를 시각화하고 시계열 예측을 한 뒤, Claude Desktop이 비즈니스 의사결정 narrative를 작성해주는 도구 모음입니다.

## 시작하기

### A. 샘플 데이터로 흐름만 익히기

1. (한 번만) Python 3.11+ 설치 → 저장소 루트에서 `pip install -r requirements.txt`
2. `jupyter lab` 실행
3. `notebooks/01_load_and_clean.ipynb` → `02_analyze_trends.ipynb` → `03_forecast.ipynb` 순서로 실행
4. 차트와 예측 표를 Claude Desktop에 첨부 + `prompts/trend_narrative.md` 호출

### B. 본인 회사 데이터로 적용

1. [`templates/sales_schema.md`](templates/sales_schema.md) 형식에 맞춰 CSV를 `data/sales.csv`에 두기 (`data/`는 git에서 무시됨)
2. 재고 데이터는 [`templates/inventory_schema.md`](templates/inventory_schema.md) 형식으로 `data/inventory.csv`
3. 노트북 안 `INPUT_PATH` 변수만 본인 파일로 변경 후 실행
4. Claude Desktop에서 차트·표 첨부 + 프롬프트 호출

> **데이터 보호**: 회사 매출·재고 데이터는 민감 정보입니다. `data/` 폴더는 `.gitignore`로 git 추적이 차단되어 있습니다. 절대 commit·push되지 않습니다.

## 흐름

```
[CSV 데이터]
    ↓ 01_load_and_clean.ipynb — 결측치·이상치·날짜 정합성
[정제된 데이터]
    ↓ 02_analyze_trends.ipynb — 시계열 시각화 (월별·계절성·이동평균)
    ↓ data_diagnosis(si) — 데이터 품질 진단 (Claude)
[검증된 데이터]
    ↓ 03_forecast.ipynb — ARIMA 예측 (statsmodels)
[예측 결과 차트 + 표]
    ↓ trend_narrative(si) — 비즈니스 언어로 해석 (Claude)
    ↓ action_recommendations(si) — 발주·재고 의사결정 (Claude)
[의사결정 narrative]
```

## 두 갈래 흐름

이 프로젝트에는 **매출/재고 추세 예측**(노트북 01~03)과 **구매 담당자 심화 분석**(노트북 04~07)이 함께 들어 있습니다. 본인 역할에 맞춰 시작하세요.

### 갈래 A — 매출/재고 추세 (`sales` 데이터)
판매·재고를 본 트렌드 + 단순 ARIMA 예측 + 의사결정 narrative.
입력: `sales.csv` (또는 샘플) → 노트북 01 → 02 → 03 → `data_diagnosis(si)` / `trend_narrative(si)` / `action_recommendations(si)`.

### 갈래 B — 구매 담당자 심화 (`purchases` + `macro` 데이터)
원자재·환율·유가가 매입 단가에 미치는 영향까지 분리 + 매입 시점 시그널 + 헷징 시나리오.
입력: `purchases.csv` + `macro.csv` (또는 샘플) → 노트북 04 → 05 → 06 → 07 → `pattern_insights(si)` / `procurement_strategy(si)` / `derivatives_insight(si)`.

## 프롬프트 카탈로그

### 매출/재고 (갈래 A)
| 프롬프트 | 목적 |
|---|---|
| [data_diagnosis.md](prompts/data_diagnosis.md) | 노트북 1·2 결과를 보고 데이터 품질 문제 진단 |
| [trend_narrative.md](prompts/trend_narrative.md) | 예측 결과 차트·표를 비즈니스 언어로 해석 |
| [action_recommendations.md](prompts/action_recommendations.md) | 재고 수준·발주 시점·리스크 추천 |

### 구매 담당자 (갈래 B)
| 프롬프트 | 목적 |
|---|---|
| [pattern_insights.md](prompts/pattern_insights.md) | STL 분해 + 매크로 회귀 결과를 비즈니스 인사이트로 |
| [procurement_strategy.md](prompts/procurement_strategy.md) | 시점·수량·우선순위 명시된 분기/시즌 매입 전략 |
| [derivatives_insight.md](prompts/derivatives_insight.md) | 선물·옵션 헷지가 회사에 의미 있는지 평가 (교육 목적) |

## 노트북 카탈로그

### 매출/재고
| 노트북 | 입력 | 출력 |
|---|---|---|
| [01_load_and_clean.ipynb](notebooks/01_load_and_clean.ipynb) | `data/sales.csv` (또는 `sample_sales.csv`) | `data/sales_clean.csv` |
| [02_analyze_trends.ipynb](notebooks/02_analyze_trends.ipynb) | `data/sales_clean.csv` | 차트 PNG (`trend_*.png`) |
| [03_forecast.ipynb](notebooks/03_forecast.ipynb) | `data/sales_clean.csv` | `forecast.csv` + 차트 |

### 구매 담당자 심화
| 노트북 | 입력 | 출력 |
|---|---|---|
| [04_decompose_patterns.ipynb](notebooks/04_decompose_patterns.ipynb) | `purchases.csv` (또는 `sample_purchases.csv`) | `stl_*.png`, `anomalies_*.png`, `pattern_summary_*.md` |
| [05_macro_context.ipynb](notebooks/05_macro_context.ipynb) | `purchases.csv` + `macro.csv` | `macro_overlay_*.png`, `macro_context_*.md` |
| [06_price_signals.ipynb](notebooks/06_price_signals.ipynb) | `purchases.csv` | `bollinger_*.png`, `signals_*.png`, `signals_*.csv` |
| [07_derivatives_hedging.ipynb](notebooks/07_derivatives_hedging.ipynb) | `purchases.csv` | `payoff_*.png`, `vega_*.png`, `derivatives_*.md` |

## 데이터 스키마

| 파일 | 스키마 |
|---|---|
| `sales.csv` | [sales_schema.md](templates/sales_schema.md) |
| `inventory.csv` | [inventory_schema.md](templates/inventory_schema.md) |
| `purchases.csv` | [purchase_schema.md](templates/purchase_schema.md) |
| `macro.csv` | [macro_schema.md](templates/macro_schema.md) |

샘플은 `data/sample_*.csv`로 커밋되어 있습니다 (24~36개월 분량). 본인 데이터를 두면 노트북 안 `INPUT_PATH` 한 줄만 바꾸면 됩니다.

## 의존성

`requirements.txt`에 포함됨: `pandas`, `numpy`, `matplotlib`, `requests`, `statsmodels`, `scipy`, `tabulate`.

- 노트북 03(매출 예측)은 `statsmodels`의 ARIMA를 기본으로 — 가벼움. 더 정교한 예측이 필요하면 `prophet` 별도 설치.
- 노트북 04(STL)·05(OLS)·06(시그널)은 `statsmodels`만으로 동작.
- 노트북 07(Black-Scholes)은 `scipy.stats.norm`만 추가로 사용.

## 검증

이 저장소의 4개 신규 노트북(04~07)은 샘플 데이터로 실제 실행해 동작을 확인했습니다. 본인 데이터로 바꿀 때는:

1. 컬럼명·타입이 [스키마](templates/)와 같은지 확인
2. 데이터 기간이 충분한지 (최소 24개월, 권장 36개월 이상)
3. 노트북 안 `TARGET = '<SKU>'` 변수만 본인 식별자로 변경

## ⚠️ 노트북 07에 대한 주의

선물·옵션 분석은 **교육 목적**입니다. 거래소 상장 \"패션 옵션\"은 거의 없으며, 현실 헷지는 OTC forward·FX 옵션·원자재 선물(cotton 등)을 회사 재무팀과 함께 설계해야 합니다. Black-Scholes는 변동성 일정·연속 거래 등 단순 가정에 의존합니다.

## 학생 사고 보호 원칙

이 도구는 **사람의 의사결정을 대체하지 않습니다**. 예측 모델은 과거 패턴을 외삽할 뿐, 시장 변화·신제품·외부 충격을 모릅니다. Claude의 narrative는 "이렇게 보일 수도 있다"는 가설이고, 최종 의사결정은 **현장을 아는 사람의 판단**으로 이루어져야 합니다.
