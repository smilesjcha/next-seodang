# 강의 진행안 (lecture_plan)

100분 (30분 강의 + 3×20분 실습 + 10분 Q&A). 압축이 필요하면 마지막에 "단축 변형" 참조.

## 0~30분 — 강의 (PPT 중심)

| 시간 | 슬라이드 | 메시지 | 보조 자료 |
|---|---|---|---|
| 0~3분 | S01 표지 | 강의 제목·일자·발표자 | — |
| 3~5분 | S02 Hook | "AI는 사고를 대체하지 않고 사고를 증폭한다" — 1개 사례 | `docs/yla/06_ai_cautions.md` 인용 |
| 5~10분 | S03~05 YLA 5단계 학습과 AI의 자리 | 읽기→쓰기→말하기→토론→수정 흐름 안에 AI가 어디 들어가는지 | `docs/yla/02_learning_process.md` |
| 10~15분 | S06~08 첫번째 use case 미리보기 (학생) | `create-ppt(yla)` 사전 체크리스트가 보고서 없으면 거절하는 화면 | 슬라이드 + GitHub 화면 캡처 |
| 15~20분 | S09~11 두번째 use case 미리보기 (대학원생) | OpenAlex로 논문 후보 → Claude의 정성 평가 흐름 | `projects/02_research_report_helper/README.md` |
| 20~25분 | S12~14 세번째 use case 미리보기 (직장인 구매) | STL 분해의 4개 패널 + payoff diagram 1장 | notebook 04, 07 출력 차트 |
| 25~28분 | S15 GitHub 저장소 투어 | `next-seodang` 폴더 트리, 누구나 클론하면 끝 | 화면 공유 |
| 28~30분 | S16 환경 셋업 안내 | Claude Desktop 실행 + Project 만드는 30초 데모 | 라이브 데모 |

**강의 30분의 원칙**:
- 슬라이드는 16장 이내로 끝낸다 (장당 ~2분).
- 라이브 데모를 1번만 끼우고, 데모가 막히면 즉시 사전 녹화 영상으로 전환 (백업 영상 미리 준비).
- 코딩 화면은 강의 시간에 띄우지 않는다 — 실습으로 미룬다.

## 30~50분 — 실습 1: YLA 5단계 (학생 시점)

자세한 진행: [hands_on/01_yla_5stage.md](hands_on/01_yla_5stage.md)

핵심 흐름:
1. (5분) 학생 본인이 미리 챙겨온 보고서·메모를 `workspace/`에 옮긴다.
2. (5분) `outline-essay(yla)` → 구조 제안 받기 (대필 안 됨을 직접 확인).
3. (5분) `create-ppt(yla)` → 체크리스트가 먼저 출력 → 보고서 없으면 거절되는 시나리오 1회.
4. (5분) 보고서를 채우고 다시 호출 → 슬라이드 + 스크립트 받기.

조교 역할: 보고서가 없는 학생을 위해 미리 준비한 `examples/input_example_gukbron.md`을 사용하도록 안내.

## 50~70분 — 실습 2: 연구보고서 도우미 (대학원생 시점)

자세한 진행: [hands_on/02_research_helper.md](hands_on/02_research_helper.md)

핵심 흐름:
1. (3분) `topic_scoping(rr)`로 자기 관심 주제를 좁힌다 — Claude Desktop 채팅만으로 진행.
2. (5분) `notebooks/01_search_papers.ipynb` 실행 → OpenAlex 무인증 검색.
3. (4분) `02_score_quality.ipynb` 실행 → 정량 점수.
4. (4분) `03_export_to_claude.ipynb`로 markdown 표 생성 → Claude Desktop에 붙여넣기.
5. (4분) `reference_quality_check(rr)`로 정성 평가.

조교 역할: 노트북을 못 켜는 학생은 미리 export된 `papers_top_15.md`을 받아 5번부터 시작.

## 70~90분 — 실습 3: 매출/재고 + 구매 심화 (직장인 시점)

자세한 진행: [hands_on/03_procurement.md](hands_on/03_procurement.md)

핵심 흐름:
1. (3분) `notebooks/04_decompose_patterns.ipynb` — sample_purchases.csv로 STL 분해 1번.
2. (5분) `pattern_insights(si)` 프롬프트로 비즈니스 해석 받기.
3. (4분) `notebooks/06_price_signals.ipynb` — 매입 시그널 시각화.
4. (4분) `notebooks/07_derivatives_hedging.ipynb` — payoff diagram 그려보기.
5. (4분) `derivatives_insight(si)`로 회사 상황별 의미 평가 받기.

조교 역할: matplotlib 한글 폰트 미설치 학생은 `data/sample_purchases.csv`를 직접 보고 Claude에게 텍스트로만 질문하는 fallback 안내.

## 90~100분 — Q&A

| 시간 | 활동 |
|---|---|
| 90~95분 | 사전에 받은 질문 3개에 대한 답변 (메일·구글폼으로 미리 수집 권장) |
| 95~100분 | 즉석 질문 |

## 단축 변형 (60분 버전)

시간이 60분으로 줄어들면:
- 강의 20분 (PPT 10장 이내) — 첫 use case만 깊게, 나머지는 GitHub 투어로 1분씩
- 실습 30분 — 학생이 1개만 깊이 (본인에게 가장 가까운 페르소나)
- Q&A 10분

PPT는 [`slides/deck.md`](slides/deck.md)의 `<!-- short -->` 마크가 붙은 슬라이드만 사용.

## 사후 미션 (학생 1주 내)

학생이 본인 자료로 다음 중 하나를 1회 수행하고 카페에 공유:
- YLA 학생 → 다음 토요일 발표 자료를 `create-ppt(yla)`로 만들고 자가 수정 회고 작성
- 대학원생 → 본인 연구 주제로 핵심 인용 5개 발굴 + `literature_synthesis(rr)` 결과 한 장 정리
- 직장인 → 본인 회사 1개 SKU 36개월 매입가로 STL 분해 + `pattern_insights(si)` 결과를 사내 회의 1장 자료로

이 미션이 강의의 진짜 ROI입니다. 강의 슬라이드가 잘 만들어졌는지보다, 학생이 1주 안에 본인 자료로 1회 돌렸는지가 중요합니다.
