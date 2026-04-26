# purchases.csv 스키마

매입(구매) 이력은 다음 형태로 `data/purchases.csv`에 저장하세요. 노트북 04~07이 사용합니다.

| 컬럼 | 타입 | 설명 | 예시 |
|---|---|---|---|
| `date` | YYYY-MM-DD | 발주 또는 입고 일자 | 2025-04-01 |
| `product_id` | string | 상품/원자재 식별자 | SKU-A001-COTTON |
| `qty_purchased` | int | 매입 수량 | 250 |
| `unit_cost_krw` | float | 단위당 매입 단가 (원) | 18250 |
| `supplier_country` | string | 공급사 국가 ISO2 | VN, CN, KR |

## 최소 요건
- `date`, `product_id`, `qty_purchased`, `unit_cost_krw`은 **필수**.
- 같은 일자/상품/공급사 조합은 한 행으로 집계.
- 가격 시계열은 가능한 **균등 간격** (월별 또는 주별).

## 권장 기간
- 최소 **24개월** — 계절성과 매크로 영향 분리에 필요.
- 36개월 이상이면 STL/ARIMA 안정성이 좋아짐.

## 환율·매크로와의 연결
- `supplier_country`가 KR이 아니면 환율 영향이 있음 → `data_macro.csv`(또는 `sample_macro.csv`)와 결합해 분석.
