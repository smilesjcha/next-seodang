# next_seodang

`next_seodang`는 아름다운서당 및 넥스트서당 강의/실습/문서 자산을 정리하는 저장소다.

## 두 갈래

이 저장소는 두 가지 목적의 콘텐츠를 함께 담고 있다.

### A. 강의·교재 자산 (기존)
강사·기획자가 활용하는 강의 전략, 설문 분석, 슬라이드 아웃라인, 실습 가이드.

### B. Claude Desktop 활용 프로젝트 (신규)
아름다운서당의 학생·연구자·직장인이 본인 과제를 Claude Desktop으로 잘 풀어내도록 돕는 **스킬·프롬프트·노트북** 모음. 별도 서버를 띄우지 않으며, 누구든 클론 후 즉시 사용 가능.

## Repository Map

```
next-seodang/
├── docs/
│   ├── analysis/        # 설문 기반 페르소나 니즈
│   ├── lecture/         # 강의 전략, 슬라이드 아웃라인, 스크립트
│   ├── guides/          # 학생용 가이드
│   └── yla/             # 아름다운서당 YLA 학습 컨텍스트 (B축의 기반 문서)
├── workshops/           # 강의 운영안, Colab 실습
├── examples/            # Python 기반 최소 Agent 예제
├── agents/              # Agent 개념 및 역할별 설계
├── skills/              # 재사용 가능한 skill 템플릿
├── prompts/             # 강의·실습·리서치 프롬프트
├── projects/
│   ├── beautiful_seodang_ai_project/   # 학생 프로젝트 작업 템플릿
│   ├── 01_yla_learning_companion/      # YLA 학생용 5단계 학습 도우미
│   ├── 02_research_report_helper/      # 대학원생 연구보고서 도우미
│   └── 03_sales_inventory_tracker/     # 직장인 매출/재고 + 추이 예측
├── SETUP.md             # 클론부터 사용까지 (모든 컴퓨터)
├── CONTRIBUTING.md      # 개선·확장 가이드
└── requirements.txt     # 노트북 사용자만 설치
```

## 시작점 — 무엇을 하고 싶은가?

| 목적 | 시작 파일 |
|---|---|
| 강의를 준비한다 (강사) | [docs/lecture/lecture_strategy.md](docs/lecture/lecture_strategy.md) |
| YLA 발표·세미나를 준비한다 (학생) | [projects/01_yla_learning_companion/README.md](projects/01_yla_learning_companion/README.md) |
| 연구보고서를 쓴다 (대학원생) | [projects/02_research_report_helper/README.md](projects/02_research_report_helper/README.md) |
| 매출·재고 추세 분석 (직장인) | [projects/03_sales_inventory_tracker/README.md](projects/03_sales_inventory_tracker/README.md) |
| 다른 컴퓨터에서 처음 설치 | [SETUP.md](SETUP.md) |
| 새 스킬·프롬프트 기여 | [CONTRIBUTING.md](CONTRIBUTING.md) |

## YLA 학습 철학

이 저장소의 모든 Claude 도구는 [docs/yla/06_ai_cautions.md](docs/yla/06_ai_cautions.md)의 원칙을 따른다.

> AI는 학생의 생각을 대신 만드는 도구가 아니라, 학생이 읽고 토론한 내용을 발표 가능한 구조로 바꿔주는 학습 보조 도구다.

이 원칙은 강의 자산(A축)과 활용 프로젝트(B축) 양쪽에 동일하게 적용된다.

## 강의 자산 빠른 시작

1. [docs/analysis/persona_needs.md](docs/analysis/persona_needs.md) — 설문 기반 니즈
2. [docs/lecture/lecture_strategy.md](docs/lecture/lecture_strategy.md) — 강의 메시지·구성 원칙
3. [docs/lecture/ppt_outline_50_60p.md](docs/lecture/ppt_outline_50_60p.md) — 발표 자료 아웃라인
4. [workshops/colab_lab_guide.md](workshops/colab_lab_guide.md), `examples/` — 실습

## 활용 프로젝트 빠른 시작

[SETUP.md](SETUP.md)을 따라가면 됩니다. 핵심:

1. Git, Claude Desktop 설치
2. `git clone` 후 Claude Desktop의 새 Project 생성
3. 사용 목적에 맞는 폴더(`projects/01_*`, `02_*`, `03_*`)를 Project knowledge에 등록
4. 채팅에서 스킬 호출 — 예: `create-ppt(yla)`, `topic_scoping(rr)`, `data_diagnosis(si)`

## 라이선스 / 사용 안내

학생·교육 목적의 자유 사용을 전제로 합니다. 회사 데이터·개인 자료는 본인 컴퓨터에만 두세요(`data/`, `workspace/`는 git 추적 차단됨).
