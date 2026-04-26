# inventory.csv 스키마

재고 데이터는 다음 형태로 `data/inventory.csv`에 저장하세요.

| 컬럼 | 타입 | 설명 | 예시 |
|---|---|---|---|
| `date` | YYYY-MM-DD | 재고 스냅샷 일자 (보통 일말 또는 주말) | 2025-04-30 |
| `product_id` | string | 상품 식별자 | SKU-A001 |
| `product_name` | string | 상품 이름 (선택) | "라이트 셔츠 화이트 M" |
| `on_hand` | int | 현재 보유 재고 수량 | 320 |
| `on_order` | int | 입고 예정 수량 (선택) | 150 |
| `reorder_point` | int | 재발주 기준점 (선택) | 100 |
| `lead_time_days` | int | 발주 후 입고까지 기간 (선택) | 14 |

## 최소 요건

- `date`, `product_id`, `on_hand` 3개는 **필수**.
- 같은 상품의 시계열 변화를 보려면 주 단위 또는 월 단위 스냅샷을 누적.

## 매출 데이터와의 연결

`product_id`가 `sales.csv`의 `product_id`와 일치해야 합니다. 매출 추세 + 재고 수준을 함께 본 의사결정이 `action_recommendations(si)`의 핵심 입력입니다.

## 보안

매출과 마찬가지로 `data/`는 git 추적 차단. 회사 외부로 공유 금지.
