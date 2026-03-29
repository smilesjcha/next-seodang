# Python Examples

## 목적

강의나 워크숍에서 Agent 개념을 가장 단순한 코드로 설명하기 위한 예제 모음이다.

## 파일

- `minimal_agent_demo.py`
  - 외부 의존성 없이 돌아가는 최소 Agent 루프
- `function_calling_demo.py`
  - 함수 호출형 구조를 직관적으로 설명하는 예제
- `agent_demo_colab.ipynb`
  - OpenAI Responses API + function calling 기반 Colab 실습 노트북
  - 회의 메모 정리, 토론 질문 생성, 발표 피드백 실습 포함
  - 도구 함수와 Agent 실행 루프에 설명 주석을 자세히 포함
  - 일부 도구는 LLM을 내부적으로 다시 호출해 발표용 품질을 높인 예외 구조 포함
  - Langfuse 추적을 붙여 함수 호출과 최종 응답 흐름을 시각적으로 확인 가능

## 예시 문서

- `../data/seminar_meeting_notes_long.md`
  - 긴 회의 메모 예시
- `../data/discussion_material_ai_native.md`
  - 토론 자료 예시
- `../data/presentation_draft_ai_native.md`
  - 발표 초안 예시

각 문서에는 어떤 함수가 Trace에 나타나는 것이 기대되는지도 함께 정리되어 있다.

## 실행

```bash
python3 examples/python/minimal_agent_demo.py
python3 examples/python/function_calling_demo.py
```

Colab에서는 `examples/python/agent_demo_colab.ipynb`를 업로드해 실행하면 된다.

## 강의 팁

- 실제 SDK를 쓰기 전에 먼저 이 예제로 원리를 보여준다.
- 그 다음 OpenAI, Gemini, Anthropic SDK 예제로 확장해도 된다.
- OpenAI API 기반 실습은 노트북에서 진행하고, API Key는 Colab Secrets 또는 환경변수로 주입한다.
- 발표 시에는 예시 문서를 함께 띄워놓고, 입력 문서 -> 도구 호출 -> 최종 응답 순서로 보여주면 이해가 가장 쉽다.
