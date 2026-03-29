# Google Colab 실습 가이드

## 실습 목표

학생들이 "Agent가 뭔지 감은 오는데, 결국 코드로는 어떻게 보이는가"를 10분 내에 체감하게 만든다.

## 추천 실습 순서

1. 함수 2~3개를 일반 Python 함수로 만든다.
2. 입력을 넣으면 어떤 함수를 호출할지 고르는 간단한 Router를 만든다.
3. 그 결과를 다시 합쳐서 최종 답을 만드는 작은 루프를 보여준다.

## 준비물

- Google Colab
- Python 3
- 선택 사항:
  - OpenAI API Key
  - Gemini API Key

API 없이도 룰 기반 예제로는 시연 가능하다.

## 실습 1. 최소 Agent

- 파일: [`examples/python/minimal_agent_demo.py`](/Users/musinsa/Documents/개인%20작업/next_seodang/examples/python/minimal_agent_demo.py)
- 목표:
  - 사용자 요청을 읽고
  - 적절한 도구를 선택하고
  - 결과를 종합하는 구조 이해

## 실습 2. 함수 호출형 구조

- 파일: [`examples/python/function_calling_demo.py`](/Users/musinsa/Documents/개인%20작업/next_seodang/examples/python/function_calling_demo.py)
- 목표:
  - "함수 호출" 개념을 직관적으로 보여주기
  - 자연어 요청이 구조화된 행동으로 바뀌는 흐름 설명

## 강의 중 시연 팁

1. 코드 전체를 설명하지 말고, `입력 -> 함수 선택 -> 결과`만 잡는다.
2. 학생에게 "이건 결국 디지털 인턴을 만드는 일"이라고 표현하면 이해가 쉽다.
3. 시연은 5~7분 내로 짧게 끝내고, 긴 설명은 슬라이드에서 처리한다.

## 추천 데모 입력 예시

### 스터디 운영

```text
이번 주 인문학 세션 공지문을 만들고, 토론 질문 5개도 같이 제안해줘.
```

### 회의 정리

```text
아래 회의 메모를 정리해서 액션아이템과 다음 회의 안건으로 나눠줘.
```

### 케이스스터디

```text
이 기업 사례를 읽고 찬성/반대 논리를 각각 3개씩 정리해줘.
```

## 실습 후 꼭 연결할 메시지

- Agent는 거대한 것이 아니라, 작은 도구 호출 루프에서 시작한다.
- 실제 현업에서는 여기에 파일, DB, API, 문서 저장소 같은 외부 연결이 붙는다.
