# Colab Notebook Cells

아래 순서대로 Colab 셀에 붙여 넣으면 짧은 데모가 가능하다.

## Cell 1

```python
def summarize_text(text):
    lines = [line.strip("- ").strip() for line in text.splitlines() if line.strip()]
    return "핵심 요약: " + " / ".join(lines[:3]) if lines else "요약할 내용이 없습니다."

def extract_action_items(text):
    keywords = ("해야", "준비", "공유", "확인", "정리", "작성", "공지")
    items = []
    for line in text.splitlines():
        clean = line.strip("- ").strip()
        if clean and any(keyword in clean for keyword in keywords):
            items.append(clean)
    return items or ["추가 액션아이템 없음"]
```

## Cell 2

```python
def choose_tools(user_request):
    tools = []
    if "요약" in user_request or "정리" in user_request:
        tools.append("summarize")
    if "액션" in user_request or "회의" in user_request:
        tools.append("actions")
    return tools or ["summarize"]
```

## Cell 3

```python
def run_agent(user_request, context):
    selected = choose_tools(user_request)
    result = {"selected_tools": selected}
    if "summarize" in selected:
        result["summary"] = summarize_text(context)
    if "actions" in selected:
        result["actions"] = extract_action_items(context)
    return result
```

## Cell 4

```python
meeting_notes = """
- 발표 자료 초안 작성 필요
- 금요일까지 참석자 공지 공유
- 읽을 자료 최종본 확인
- 세션 도입부를 조금 더 선명하게 정리
"""

run_agent("이번 주 세션 회의 메모를 정리하고 액션아이템을 뽑아줘.", meeting_notes)
```
