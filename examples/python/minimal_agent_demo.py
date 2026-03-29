"""Minimal agent demo for Colab or local Python.

This example avoids external dependencies so it can be shown quickly in class.
"""

from __future__ import annotations


def summarize_text(text: str) -> str:
    sentences = [line.strip("- ").strip() for line in text.splitlines() if line.strip()]
    if not sentences:
        return "요약할 내용이 없습니다."
    preview = sentences[:3]
    return "핵심 요약: " + " / ".join(preview)


def extract_action_items(text: str) -> list[str]:
    keywords = ("해야", "준비", "공유", "확인", "정리", "작성", "공지")
    items = []
    for line in text.splitlines():
        clean = line.strip("- ").strip()
        if clean and any(keyword in clean for keyword in keywords):
            items.append(clean)
    return items or ["추가 액션아이템 없음"]


def generate_discussion_questions(topic: str) -> list[str]:
    return [
        f"{topic}의 핵심 문제는 무엇인가?",
        f"{topic}에 대해 반대 관점은 어떻게 제기될 수 있는가?",
        f"{topic}를 오늘 우리의 현실에 적용하면 어떤 시사점이 있는가?",
    ]


def extract_topic(user_request: str) -> str:
    trimmed = user_request.strip()
    replacements = [
        "정리하고",
        "정리해서",
        "만들어줘",
        "뽑아줘",
        "추출해줘",
        "질문도",
        "액션아이템도",
    ]
    topic = trimmed
    for phrase in replacements:
        topic = topic.replace(phrase, " ")
    topic = " ".join(topic.split()).strip(" .")
    return topic or "이 주제"


def choose_tools(user_request: str) -> list[str]:
    chosen = []
    if "요약" in user_request or "정리" in user_request:
        chosen.append("summarize_text")
    if "액션" in user_request or "할 일" in user_request or "회의" in user_request:
        chosen.append("extract_action_items")
    if "질문" in user_request or "토론" in user_request:
        chosen.append("generate_discussion_questions")
    if not chosen:
        chosen.append("summarize_text")
    return chosen


def run_agent(user_request: str, context: str) -> dict[str, object]:
    tools = choose_tools(user_request)
    result: dict[str, object] = {"request": user_request, "selected_tools": tools}
    topic = extract_topic(user_request)

    if "summarize_text" in tools:
        result["summary"] = summarize_text(context)
    if "extract_action_items" in tools:
        result["action_items"] = extract_action_items(context)
    if "generate_discussion_questions" in tools:
        result["questions"] = generate_discussion_questions(topic)

    return result


if __name__ == "__main__":
    sample_request = "이번 주 세션 회의 메모를 정리하고 토론 질문도 만들어줘."
    sample_context = """
    - 발표 자료 초안 작성 필요
    - 금요일까지 참석자 공지 공유
    - 읽을 자료 최종본 확인
    - 세션 도입부를 조금 더 선명하게 정리
    """

    output = run_agent(sample_request, sample_context)
    print("=== Agent Output ===")
    for key, value in output.items():
        print(f"{key}: {value}")
