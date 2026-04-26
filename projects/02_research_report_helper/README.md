# 02 Research Report Helper

대학원 학생(아름다운서당 동시 수강자 포함)이 **연구보고서 작성**의 핵심 단계인 **논문 발굴 → 참조 퀄리티 평가 → 핵심 합성 → 보고서 초안**을 Claude Desktop + Jupyter Notebook으로 진행할 때 사용하는 도구 모음입니다.

## 시작하기

### A. Claude Desktop만 쓰는 경우 (가장 간단)

1. Claude Desktop에서 새 Project 생성 (예: "Research Report Helper").
2. Project knowledge에 `projects/02_research_report_helper/prompts/`의 모든 `.md`를 업로드.
3. 채팅에서 프롬프트 이름을 부르며 시작:
   - 예: "topic_scoping 프롬프트로 내 연구 주제를 좁혀줘. 현재 주제는 ~"

### B. 노트북도 함께 쓰는 경우 (논문 검색·퀄리티 평가)

1. (한 번만) Python 3.11+ 설치 → 저장소 루트에서 `pip install -r requirements.txt`
2. Jupyter 실행: `jupyter lab` (또는 VS Code의 Jupyter 확장)
3. `notebooks/01_search_papers.ipynb` 부터 순서대로 실행
4. 마지막 노트북 결과(markdown 표)를 Claude Desktop 채팅에 붙여넣고 `literature_synthesis` 프롬프트로 합성

## 흐름

```
[연구 주제]
    ↓ topic_scoping(rr) — 주제를 답변 가능한 질문으로 좁히기
[연구 질문]
    ↓ 01_search_papers.ipynb — arXiv / OpenAlex / Semantic Scholar 검색
[논문 후보 N개]
    ↓ 02_score_quality.ipynb — 인용수·연도·저널 기반 퀄리티 점수
    ↓ reference_quality_check(rr) — Claude의 추가 평가 (관련성·신뢰성)
[핵심 참조 N개]
    ↓ 03_export_to_claude.ipynb — markdown 표로 export
    ↓ literature_synthesis(rr) — Claude의 합성
[합성된 문헌 리뷰]
    ↓ report_outline(rr) — 보고서 목차 생성
[연구보고서 초안]
```

## 프롬프트 카탈로그

| 프롬프트 | 목적 |
|---|---|
| [topic_scoping.md](prompts/topic_scoping.md) | 모호한 주제를 검증 가능한 연구 질문으로 좁힘 |
| [reference_quality_check.md](prompts/reference_quality_check.md) | 노트북의 정량 점수 위에 Claude의 정성 평가를 더함 |
| [literature_synthesis.md](prompts/literature_synthesis.md) | 핵심 참조 N개를 합성해 문헌 리뷰 작성 |
| [report_outline.md](prompts/report_outline.md) | 합성 결과를 바탕으로 보고서 목차 생성 |

## 노트북 카탈로그

| 노트북 | 입력 | 출력 |
|---|---|---|
| [01_search_papers.ipynb](notebooks/01_search_papers.ipynb) | 키워드, 연도 범위 | `data/papers_raw.csv` |
| [02_score_quality.ipynb](notebooks/02_score_quality.ipynb) | `data/papers_raw.csv` | `data/papers_scored.csv` |
| [03_export_to_claude.ipynb](notebooks/03_export_to_claude.ipynb) | `data/papers_scored.csv` | `data/papers_top_N.md` (Claude에 붙여넣을 표) |

## 외부 API

- **arXiv** (https://arxiv.org/help/api): 무인증, 과학·공학·CS 분야 강함
- **OpenAlex** (https://docs.openalex.org/): 무인증, 일일 100k 무료, 모든 분야 + 인용 데이터
- **Semantic Scholar** (https://api.semanticscholar.org/): 키 선택. CS·생명과학 강함

기본은 OpenAlex로 충분합니다. 키 발급 부담 없이 누구나 시작 가능합니다.

## 데이터 폴더

`data/`는 git에서 무시됩니다 (`.gitkeep` 제외). 검색 결과·점수 데이터는 본인 컴퓨터에만 남습니다.

## 학생 사고 보호 원칙

이 도구는 **논문을 직접 읽기 전에 후보를 좁히는 보조**일 뿐입니다. 점수가 높다고 학생이 그 논문을 읽지 않은 채 인용하면 연구 품질이 떨어집니다. 합성 결과는 **본인이 검증하는 출발점**으로만 쓰세요.
