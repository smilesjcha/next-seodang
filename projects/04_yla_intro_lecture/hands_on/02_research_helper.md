# 실습 2 — 연구보고서 도우미 (대학원생 시점, 20분)

## 도달할 결과

학생이 본인 관심 주제 한 개로 **OpenAlex 검색 → 정량 점수 → markdown export → Claude의 정성 평가** 흐름을 1회 완주합니다. 마지막에 학생 손에 \"논문 후보 15건 + 정성 평가\" 한 페이지가 남습니다.

## 도달하지 않을 결과

- 본문을 다 읽지 않은 채 \"연구 합성\"을 받는 것 — `literature_synthesis(rr)`은 학생이 본문 핵심을 직접 채우지 않으면 합성을 거절합니다.
- 완성된 문헌 리뷰 — 강의 안에서는 후보 발굴까지만.

## 사전 조건

- Python 3.11+ + `requirements.txt` 설치 완료
- Claude Desktop의 "Research Report Helper" Project에 `projects/02_research_report_helper/prompts/`의 모든 `.md` 등록
- 인터넷 연결 (OpenAlex API 호출)

## 진행 (20분)

### 0~3분 — `topic_scoping(rr)`로 주제 좁히기

학생 활동: Claude Desktop 채팅에 다음 입력.

```
topic_scoping(rr)을 적용해줘.

내 현재 주제: <학생 본인의 한 줄 주제>
관심 분야: <학과/세부>
이미 알고 있는 핵심 개념: <2-3개>
보고서 분량: 학기말 보고서 30쪽
제출까지 남은 시간: 6주
```

받게 될 결과:
- 4개 형식의 질문 후보 (기술적/비교/인과/응용)
- 각 후보에 검색 키워드 5-7개

강사 안내:
> \"검색 키워드를 1개 골라서 다음 노트북에 넣을 거예요.\"

학생이 키워드 1개를 메모.

### 3~8분 — `01_search_papers.ipynb` 실행

학생 활동:

```bash
cd ~/next-seodang
source .venv/bin/activate    # Windows: .venv\Scripts\activate
jupyter lab projects/02_research_report_helper/notebooks/01_search_papers.ipynb
```

또는 VS Code에서 노트북 직접 열기.

수정할 셀 (한 줄):
```python
QUERY = '<위에서 받은 키워드>'   # 예: 'agent architectures large language models'
```

전체 셀 Run All. 마지막에 `data/papers_raw.csv` 생성 확인.

### 8~12분 — `02_score_quality.ipynb` 실행

학생 활동: 다음 노트북을 열고 Run All.

상위 15건의 정량 점수 표가 보임. 강사 설명:

> \"점수가 높다고 좋은 논문은 아닙니다. 이건 1차 필터입니다. 다음에 Claude로 정성 평가를 합니다.\"

### 12~14분 — `03_export_to_claude.ipynb` 실행

학생 활동: Run All. `data/papers_top_15.md` 생성됨.

해당 파일을 텍스트 에디터로 열고 **전체 복사** (CMD/CTRL + A → C).

### 14~19분 — `reference_quality_check(rr)` 호출

학생 활동: Claude Desktop 채팅에 붙여넣기:

```
reference_quality_check(rr) — 다음 논문 후보들을 평가해줘.

내 연구 질문:
<topic_scoping에서 좁힌 한 문장>

논문 후보:
<위에서 복사한 markdown 표 + abstracts>
```

받게 될 결과:
- 각 논문에 4개 별점 (관련성·신뢰성·재현성·차별성)
- 분류: 🟢 핵심 / 🟡 보조 / 🔴 제외
- "빠진 관점" 안내

학생이 🟢로 분류된 논문 1-3개를 메모.

### 19~20분 — 회고

학생 활동: 한 줄 회고:
> \"내 주제로 🟢 논문 ___개를 발굴했고, 그 중 ___개는 내가 본문을 읽어볼 가치가 있다.\"

## fallback

| 막힘 | 대응 |
|---|---|
| Python 환경 안 됨 | 강사가 미리 export해 둔 `papers_top_15.md` 샘플을 USB·카페로 배포 → 4단계부터 시작 |
| OpenAlex 응답 느림/실패 | 노트북 안 `MAX_RESULTS=10`로 줄이고 재시도, 또는 `arxiv` API로 fallback |
| 본인 주제가 너무 추상적 | `topic_scoping(rr)`을 한번 더 호출 — Claude가 좁혀줌 |
| 점수 분포가 이상함 | 정량 점수는 \"표본 안에서의 상대값\". 작은 검색 결과면 의미 약함 — 키워드를 더 좁혀 재검색 |

## 강사 메모

이 실습의 메시지는 \"논문을 빠르게 찾는 법\"이 아닙니다. **\"논문 발굴은 정량 + 정성의 두 단계로 분리해야 한다\"** 입니다.

학생이 \"Claude한테 그냥 논문 추천해달라고 하면 되지 않나요?\"라고 묻습니다. 강사 답:

> \"Claude는 인용수·저널·연도를 모릅니다. 노트북이 정확합니다. Claude는 abstract를 읽고 \'관련성·신뢰성\'을 판단합니다. 두 도구를 합쳐야 합니다.\"

이 분리가 학생이 1주일 뒤 본인 연구로 적용할 때 핵심입니다 — 노트북 + Claude의 협업 구조.
