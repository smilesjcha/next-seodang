# macro.csv 스키마

매크로(거시경제) 지표는 다음 형태로 `data/macro.csv`에 저장하세요. 노트북 05·06·07이 사용합니다.

| 컬럼 | 타입 | 설명 | 예시 |
|---|---|---|---|
| `date` | YYYY-MM-DD | 월말 또는 월초 기준 | 2025-04-01 |
| `fx_krw_usd` | float | KRW/USD 환율 | 1325.4 |
| `oil_index_usd` | float | 유가 지표 (WTI 등) USD/bbl | 79.2 |
| `apparel_cost_index` | float | 의류 원가 지수 (cotton+poly 등 raw material proxy) 100-base | 105.7 |

## 권장 출처

- **환율**: 한국은행 ECOS API, 또는 `https://www.investing.com` 무료 데이터
- **유가**: EIA, IEA, 또는 야후파이낸스의 `WTI=F` 월별 close
- **원가 지수**: 자사 발주 원가 추적치, 또는 산업협회 발표 원자재 가격 가중평균

## 노트북에서의 사용
- **05_macro_context.ipynb**: 매입 단가와 매크로의 상관·시차 분석
- **06_price_signals.ipynb**: 매크로를 control variable로 두고 가격 z-score 산출
- **07_derivatives_hedging.ipynb**: 환·유가 헷징 시나리오 평가
